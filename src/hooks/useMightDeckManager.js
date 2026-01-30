import { useLocalStorage } from "./useLocalStorage";
import { useEffect, useCallback } from "react";
import initialData from "../data/startDecks.json";
import { getFromLocalStorage } from "../utils/localStorage";

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

  const getNextDrawOrder = (deckID) => {
    if (!data) return 1;
    const deck = data.find((d) => d.deckID === deckID);
    if (!deck) return 1;

    const maxDrawOrder = deck.deck.reduce(
      (max, card) => Math.max(max, card.drawOrder || 0),
      0,
    );
    return maxDrawOrder + 1;
  };

  const dealRandomCard = async (deckID) => {
    if (!data) return null;

    const undealtCards = getUndealtCards(deckID);
    if (undealtCards.length === 0) {
      console.warn(`No undealt cards available in deck: ${deckID}`);
      return null;
    }

    const randomIndex = Math.floor(Math.random() * undealtCards.length);
    const selectedCard = undealtCards[randomIndex];
    const nextDrawOrder = getNextDrawOrder(deckID);

    const updatedData = data.map((deck) => {
      if (deck.deckID === deckID) {
        return {
          ...deck,
          deck: deck.deck.map((card) =>
            card.cardID === selectedCard.cardID
              ? {
                  ...card,
                  isDealt: true,
                  isActive: true,
                  drawOrder: nextDrawOrder,
                }
              : card,
          ),
        };
      }
      return deck;
    });

    await setDataAsync(updatedData);
    return selectedCard;
  };

  const dealCard = async (deckID, cardID) => {
    if (!data) return null;

    const nextDrawOrder = getNextDrawOrder(deckID);

    const updatedData = data.map((deck) => {
      if (deck.deckID === deckID) {
        return {
          ...deck,
          deck: deck.deck.map((card) =>
            card.cardID === cardID
              ? {
                  ...card,
                  isDealt: true,
                  isActive: true,
                  drawOrder: nextDrawOrder,
                }
              : card,
          ),
        };
      }
      return deck;
    });

    await setDataAsync(updatedData);

    const deck = data.find((d) => d.deckID === deckID);
    return deck ? deck.deck.find((c) => c.cardID === cardID) : null;
  };

  const dealMultipleRandomCards = useCallback(
    async (deckID, count) => {
      // Read fresh data from localStorage to avoid stale closures
      const currentData = await getFromLocalStorage("oathswornDeckData", null);
      if (!currentData) return [];

      const deck = currentData.find((d) => d.deckID === deckID);
      if (!deck) return [];

      const undealtCards = deck.deck.filter((card) => !card.isDealt);
      if (undealtCards.length === 0) {
        console.warn(`No undealt cards available in deck: ${deckID}`);
        return [];
      }

      const numCardsToDeal = Math.min(count, undealtCards.length);
      const selectedCards = [];
      const availableCards = [...undealtCards];

      // Select random cards
      for (let i = 0; i < numCardsToDeal; i++) {
        const randomIndex = Math.floor(Math.random() * availableCards.length);
        selectedCards.push(availableCards[randomIndex]);
        availableCards.splice(randomIndex, 1);
      }

      const maxDrawOrder = deck.deck.reduce(
        (max, card) => Math.max(max, card.drawOrder || 0),
        0,
      );
      let nextDrawOrder = maxDrawOrder + 1;
      const selectedCardIDs = selectedCards.map((card) => card.cardID);

      const updatedData = currentData.map((d) => {
        if (d.deckID === deckID) {
          return {
            ...d,
            deck: d.deck.map((card) => {
              if (selectedCardIDs.includes(card.cardID)) {
                const cardDrawOrder = nextDrawOrder++;
                return {
                  ...card,
                  isDealt: true,
                  isActive: true,
                  drawOrder: cardDrawOrder,
                };
              }
              return card;
            }),
          };
        }
        return d;
      });

      await setDataAsync(updatedData);
      return selectedCards;
    },
    [setDataAsync],
  );

  const resetDeck = async (deckID) => {
    if (!data) return;

    const updatedData = data.map((deck) => {
      if (deck.deckID === deckID) {
        return {
          ...deck,
          deck: deck.deck.map((card) =>
            card.isActive ? { ...card, isDealt: false, isActive: false } : card,
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

  const resetMightDeckDataToInitial = async () => {
    await setDataAsync(initialData);
  };

  return {
    decks: data,
    isLoading,
    dealRandomCard,
    dealCard,
    dealMultipleRandomCards,
    clearActiveCards,
    getUndealtCards,
    getDeckStats,
    resetDeck,
    resetMightDeckDataToInitial,
  };
}
