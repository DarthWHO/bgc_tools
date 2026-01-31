import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";
import initialData from "../data/startDecks.json";

export function useMightDeckManager() {
  const { data, isLoading, setDataAsync } = useLocalStorage(
    "oathswornDeckData",
    null,
  );

  useEffect(() => {
    if (data === null) {
      setDataAsync(initialData);
    }
  }, [data, setDataAsync]);

  const getUndealtCards = (deckID) => {
    if (!data) return [];
    const deck = data.find((d) => d.deckID === deckID);
    return deck ? deck.deck.filter((card) => !card.isDealt) : [];
  };

  const dealMultipleRandomCards = async (deckID, count) => {
    if (!data) return [];

    const deck = data.find((d) => d.deckID === deckID);
    if (!deck) return [];

    let currentUndealtCards = deck.deck.filter((card) => !card.isDealt);
    const dealtCards = [];
    const cardsToDeal = [];

    // Select all cards first
    for (let i = 0; i < count && currentUndealtCards.length > 0; i++) {
      const randomIndex = Math.floor(
        Math.random() * currentUndealtCards.length,
      );
      const selectedCard = currentUndealtCards[randomIndex];
      const nextDrawOrder =
        deck.deck.reduce((max, card) => Math.max(max, card.drawOrder || 0), 0) +
        i +
        1;

      cardsToDeal.push({
        cardID: selectedCard.cardID,
        drawOrder: nextDrawOrder,
      });
      dealtCards.push(selectedCard);

      // Remove from undealt list so we don't pick it again
      currentUndealtCards = currentUndealtCards.filter(
        (card) => card.cardID !== selectedCard.cardID,
      );
    }

    // Update state once with all cards
    const updatedData = data.map((d) => {
      if (d.deckID === deckID) {
        return {
          ...d,
          deck: d.deck.map((card) => {
            const cardUpdate = cardsToDeal.find(
              (c) => c.cardID === card.cardID,
            );
            return cardUpdate
              ? {
                  ...card,
                  isDealt: true,
                  isActive: true,
                  drawOrder: cardUpdate.drawOrder,
                }
              : card;
          }),
        };
      }
      return d;
    });

    await setDataAsync(updatedData);
    return dealtCards;
  };

  const dealFromMultipleDecks = async (decksWithCounts) => {
    if (!data) return;

    // Build all card selections and updates in memory first
    const allUpdates = {};

    for (const { deckID, count } of decksWithCounts) {
      const deck = data.find((d) => d.deckID === deckID);
      if (!deck) continue;

      let currentUndealtCards = deck.deck.filter((card) => !card.isDealt);
      const cardsToDeal = [];

      for (let i = 0; i < count && currentUndealtCards.length > 0; i++) {
        const randomIndex = Math.floor(
          Math.random() * currentUndealtCards.length,
        );
        const selectedCard = currentUndealtCards[randomIndex];
        const nextDrawOrder =
          deck.deck.reduce(
            (max, card) => Math.max(max, card.drawOrder || 0),
            0,
          ) +
          i +
          1;

        cardsToDeal.push({
          cardID: selectedCard.cardID,
          drawOrder: nextDrawOrder,
        });

        currentUndealtCards = currentUndealtCards.filter(
          (card) => card.cardID !== selectedCard.cardID,
        );
      }

      allUpdates[deckID] = cardsToDeal;
    }

    // Apply all updates in one state change
    const updatedData = data.map((d) => {
      const cardsToDeal = allUpdates[d.deckID];
      if (!cardsToDeal) return d;

      return {
        ...d,
        deck: d.deck.map((card) => {
          const cardUpdate = cardsToDeal.find((c) => c.cardID === card.cardID);
          return cardUpdate
            ? {
                ...card,
                isDealt: true,
                isActive: true,
                drawOrder: cardUpdate.drawOrder,
              }
            : card;
        }),
      };
    });

    await setDataAsync(updatedData);
  };

  const endDraw = async (isOathsworn) => {
    if (!data) return;

    const updatedData = data.map((deck) => {
      if (deck.isOathsworn === isOathsworn) {
        return {
          ...deck,
          deck: deck.deck.map((card) => ({
            ...card,
            isActive: false,
          })),
        };
      }
      return deck;
    });

    await setDataAsync(updatedData);
  };

  const shuffleDeck = async (deckID) => {
    if (!data) return;

    const updatedData = data.map((deck) => {
      if (deck.deckID === deckID) {
        return {
          ...deck,
          deck: deck.deck.map((card) =>
            card.isActive
              ? card
              : {
                  ...card,
                  isDealt: false,
                  drawOrder: 0,
                  isSelected: false,
                  isRedrawn: false,
                  isCritMissNegated: false,
                  isCritAlreadyDrawn: false,
                },
          ),
        };
      }
      return deck;
    });

    await setDataAsync(updatedData);
  };

  const clearActiveCards = async (deckID) => {
    if (!data) return;

    const updatedData = data.map((deck) => {
      if (deck.deckID === deckID) {
        return {
          ...deck,
          deck: deck.deck.map((card) => ({
            ...card,
            isActive: false,
            drawOrder: card.isActive ? 0 : card.drawOrder,
          })),
        };
      }
      return deck;
    });

    await setDataAsync(updatedData);
  };

  const getDeckStats = (deckID) => {
    if (!data) return { total: 0, dealt: 0, remaining: 0, remainingByType: [] };

    const deck = data.find((d) => d.deckID === deckID);
    if (!deck) return { total: 0, dealt: 0, remaining: 0, remainingByType: [] };

    const total = deck.deck.length;
    const dealt = deck.deck.filter((card) => card.isDealt).length;
    const remaining = total - dealt;

    // Group undealt cards by description and value
    const undealtCards = deck.deck.filter((card) => !card.isDealt);
    const groupedCards = {};

    undealtCards.forEach((card) => {
      const key = `${card.description}-${card.value}`;
      if (!groupedCards[key]) {
        groupedCards[key] = {
          description: card.description,
          value: card.value,
          count: 0,
        };
      }
      groupedCards[key].count++;
    });

    const remainingByType = Object.values(groupedCards);

    return { total, dealt, remaining, remainingByType };
  };

  const getActiveCards = (deckID) => {
    if (!data) return [];
    const deck = data.find((d) => d.deckID === deckID);
    return deck ? deck.deck.filter((card) => card.isActive) : [];
  };

  const toggleCardSelection = async (cardID) => {
    if (!data) return;

    const updatedData = data.map((deck) => {
      return {
        ...deck,
        deck: deck.deck.map((card) =>
          card.cardID === cardID
            ? { ...card, isSelected: !card.isSelected }
            : card,
        ),
      };
    });

    await setDataAsync(updatedData);
  };

  const resetMightDeckDataToInitial = async () => {
    await setDataAsync(initialData);
  };

  return {
    decks: data,
    isLoading,
    dealMultipleRandomCards,
    dealFromMultipleDecks,
    toggleCardSelection,
    getActiveCards,
    clearActiveCards,
    getUndealtCards,
    getDeckStats,
    shuffleDeck,
    resetMightDeckDataToInitial,
    endDraw,
  };
}
