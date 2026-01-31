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

  // Helper: Find a deck by ID
  const findDeck = (deckID, dataSource = data) => {
    return dataSource?.find((d) => d.deckID === deckID);
  };

  // Helper: Get the maximum draw order for a deck
  const getMaxDrawOrder = (deck) => {
    return deck.deck.reduce(
      (max, card) => Math.max(max, card.drawOrder || 0),
      0,
    );
  };

  // Helper: Reset card to undealt state
  const resetCard = (card) => ({
    ...card,
    isDealt: false,
    drawOrder: 0,
    isSelected: false,
    isRedrawn: false,
    isCritMissNegated: false,
    isCritAlreadyDrawn: false,
  });

  // Helper: Shuffle a specific deck (returns updated data, doesn't persist)
  const shuffleDeckInMemory = (currentData, deckID) => {
    return currentData.map((d) => {
      if (d.deckID === deckID) {
        return {
          ...d,
          deck: d.deck.map((card) => (card.isActive ? card : resetCard(card))),
        };
      }
      return d;
    });
  };

  // Helper: Update deck with dealt cards
  const updateDeckWithDealtCards = (
    currentData,
    deckID,
    cardsToDeal,
    critDraw = false,
  ) => {
    return currentData.map((d) => {
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
                  isCritMissNegated: critDraw,
                }
              : card;
          }),
        };
      }
      return d;
    });
  };

  // Helper: Deal cards from a single deck with auto-shuffle
  const dealCardsFromDeck = (currentData, deckID, count, critDraw = false) => {
    const deck = findDeck(deckID, currentData);
    if (!deck) return { updatedData: currentData, dealtCards: [] };

    let workingData = currentData;
    let currentUndealtCards = deck.deck.filter((card) => !card.isDealt);
    const dealtCards = [];
    const cardsToDeal = [];
    let cardsDealtSoFar = 0;

    for (let i = 0; i < count; i++) {
      // Shuffle if out of cards
      if (currentUndealtCards.length === 0) {
        workingData = shuffleDeckInMemory(workingData, deckID);
        const updatedDeck = findDeck(deckID, workingData);
        currentUndealtCards = updatedDeck.deck.filter((card) => !card.isDealt);
      }

      if (currentUndealtCards.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * currentUndealtCards.length,
        );
        const selectedCard = currentUndealtCards[randomIndex];
        const currentDeck = findDeck(deckID, workingData);
        const nextDrawOrder =
          getMaxDrawOrder(currentDeck) + cardsDealtSoFar + 1;

        cardsToDeal.push({
          cardID: selectedCard.cardID,
          drawOrder: nextDrawOrder,
        });
        dealtCards.push(selectedCard);
        cardsDealtSoFar++;

        currentUndealtCards = currentUndealtCards.filter(
          (card) => card.cardID !== selectedCard.cardID,
        );
      }
    }

    const updatedData = updateDeckWithDealtCards(
      workingData,
      deckID,
      cardsToDeal,
      critDraw,
    );
    return { updatedData, dealtCards };
  };

  const getInactiveCardCount = (deckID) => {
    const deck = findDeck(deckID);
    return deck ? deck.deck.filter((card) => !card.isActive).length : 0;
  };

  const getUndealtCards = (deckID) => {
    const deck = findDeck(deckID);
    return deck ? deck.deck.filter((card) => !card.isDealt) : [];
  };

  const dealMultipleRandomCards = async (deckID, count) => {
    if (!data) return [];
    const { updatedData, dealtCards } = dealCardsFromDeck(data, deckID, count);
    await setDataAsync(updatedData);
    return dealtCards;
  };

  const dealFromMultipleDecks = async (decksWithCounts) => {
    if (!data) return;

    let currentData = data;
    const allUpdates = {};

    for (const { deckID, count } of decksWithCounts) {
      const { updatedData, dealtCards } = dealCardsFromDeck(
        currentData,
        deckID,
        count,
      );
      currentData = updatedData;

      const deck = findDeck(deckID, updatedData);
      if (deck) {
        allUpdates[deckID] = dealtCards.map((card) => {
          const updatedCard = deck.deck.find((c) => c.cardID === card.cardID);
          return {
            cardID: card.cardID,
            drawOrder: updatedCard.drawOrder,
          };
        });
      }
    }

    await setDataAsync(currentData);
  };

  const endDraw = async (isOathsworn) => {
    if (!data) return;

    const updatedData = data.map((deck) =>
      deck.isOathsworn === isOathsworn
        ? {
            ...deck,
            deck: deck.deck.map((card) => ({ ...card, isActive: false })),
          }
        : deck,
    );

    await setDataAsync(updatedData);
  };

  const shuffleDeck = async (deckID) => {
    if (!data) return;
    const updatedData = shuffleDeckInMemory(data, deckID);
    await setDataAsync(updatedData);
  };

  const clearActiveCards = async (deckID) => {
    if (!data) return;

    const updatedData = data.map((deck) =>
      deck.deckID === deckID
        ? {
            ...deck,
            deck: deck.deck.map((card) => ({
              ...card,
              isActive: false,
              drawOrder: card.isActive ? 0 : card.drawOrder,
            })),
          }
        : deck,
    );

    await setDataAsync(updatedData);
  };

  const getDeckStats = (deckID) => {
    const deck = findDeck(deckID);
    if (!deck) return { total: 0, dealt: 0, remaining: 0, remainingByType: [] };

    const total = deck.deck.length;
    const dealt = deck.deck.filter((card) => card.isDealt).length;
    const remaining = total - dealt;

    // Group undealt cards by description and value
    const undealtCards = deck.deck.filter((card) => !card.isDealt);
    const groupedCards = undealtCards.reduce((acc, card) => {
      const key = `${card.description}-${card.value}`;
      if (!acc[key]) {
        acc[key] = {
          description: card.description,
          value: card.value,
          count: 0,
        };
      }
      acc[key].count++;
      return acc;
    }, {});

    const remainingByType = Object.values(groupedCards);

    return { total, dealt, remaining, remainingByType };
  };

  const getActiveCards = (deckID) => {
    const deck = findDeck(deckID);
    return deck ? deck.deck.filter((card) => card.isActive) : [];
  };

  const toggleCardSelection = async (cardID) => {
    if (!data) return;

    const updatedData = data.map((deck) => {
      return {
        ...deck,
        deck: deck.deck.map((card) =>
          card.cardID === cardID
            ? {
                ...card,
                isSelected: !card.isSelected,
              }
            : card,
        ),
      };
    });

    await setDataAsync(updatedData);
  };

  const redrawSelectedNonCritCards = async (deckID) => {
    if (!data) return;

    const deck = findDeck(deckID);
    if (!deck) return;

    const selectedCards = deck.deck.filter(
      (card) => card.isSelected && card.isActive,
    );

    let currentData = data;

    for (const card of selectedCards) {
      if (card.isCrit) continue;

      currentData = currentData.map((d) => {
        if (d.deckID === deckID) {
          return {
            ...d,
            deck: d.deck.map((c) =>
              c.cardID === card.cardID
                ? { ...c, isRedrawn: true, isSelected: false }
                : c,
            ),
          };
        }
        return d;
      });

      const { updatedData } = dealCardsFromDeck(currentData, deckID, 1);
      currentData = updatedData;
    }

    await setDataAsync(currentData);
  };

  const redrawSelectedCritCards = async (deckID) => {
    if (!data) return;

    const deck = findDeck(deckID);
    if (!deck) return;

    const selectedCards = deck.deck.filter(
      (card) => card.isSelected && card.isActive,
    );

    let currentData = data;

    for (const card of selectedCards) {
      if (!card.isCrit) continue;

      currentData = currentData.map((d) => {
        if (d.deckID === deckID) {
          return {
            ...d,
            deck: d.deck.map((c) =>
              c.cardID === card.cardID
                ? {
                    ...c,
                    isSelected: false,
                    isCritAlreadyDrawn: true,
                  }
                : c,
            ),
          };
        }
        return d;
      });

      const { updatedData } = dealCardsFromDeck(currentData, deckID, 1, true);
      currentData = updatedData;
    }

    await setDataAsync(currentData);
  };

  const resetMightDeckDataToInitial = async () => {
    await setDataAsync(initialData);
  };

  const getSelectedNonCritCardCount = (deckID) => {
    const deck = findDeck(deckID);
    if (!deck) return 0;
    return deck.deck.filter(
      (card) => card.isSelected && card.isActive && !card.isCrit,
    ).length;
  };

  const getSelectedCritCardCount = (deckID) => {
    const deck = findDeck(deckID);
    if (!deck) return 0;
    return deck.deck.filter(
      (card) => card.isSelected && card.isActive && card.isCrit,
    ).length;
  };

  return {
    decks: data,
    isLoading,
    dealMultipleRandomCards,
    dealFromMultipleDecks,
    redrawSelectedNonCritCards,
    redrawSelectedCritCards,
    toggleCardSelection,
    getActiveCards,
    getInactiveCardCount,
    clearActiveCards,
    getUndealtCards,
    getDeckStats,
    getSelectedNonCritCardCount,
    getSelectedCritCardCount,
    shuffleDeck,
    resetMightDeckDataToInitial,
    endDraw,
  };
}
