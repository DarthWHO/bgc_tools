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

  const dealRandomCard = async (deckID) => {
    if (!data) return null;

    const undealtCards = getUndealtCards(deckID);
    if (undealtCards.length === 0) {
      console.warn(`No undealt cards available in deck: ${deckID}`);
      return null;
    }

    const randomIndex = Math.floor(Math.random() * undealtCards.length);
    const selectedCard = undealtCards[randomIndex];

    const updatedData = data.map((deck) => {
      if (deck.deckID === deckID) {
        return {
          ...deck,
          deck: deck.deck.map((card) =>
            card.cardID === selectedCard.cardID
              ? { ...card, isDealt: true, isActive: true }
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

    const updatedData = data.map((deck) => {
      if (deck.deckID === deckID) {
        return {
          ...deck,
          deck: deck.deck.map((card) =>
            card.cardID === cardID
              ? { ...card, isDealt: true, isActive: true }
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

  const resetDeck = async (deckID) => {
    if (!data) return;

    const updatedData = data.map((deck) => {
      if (deck.deckID === deckID) {
        return {
          ...deck,
          // deck: deck.deck.map((card) =>
          //   !card.isActive ? { ...card, isDealt: false } : card,
          // ),
          deck: deck.deck.map((card) =>
            card.isActive ? { ...card, isDealt: false, isActive: false } : card,
          ),
        };
      }
      return deck;
    });

    await setDataAsync(updatedData);
  };

  const resetAllDecks = async () => {
    if (!data) return;

    const updatedData = data.map((deck) => ({
      ...deck,
      deck: deck.deck.map((card) => ({ ...card, isDealt: false })),
    }));

    await setDataAsync(updatedData);
  };

  const clearActiveCards = async (deckID) => {
    if (!data) return;

    const updatedData = data.map((deck) => {
      if (deck.deckID === deckID) {
        return {
          ...deck,
          deck: deck.deck.map((card) => ({ ...card, isActive: false })),
        };
      }
      return deck;
    });

    await setDataAsync(updatedData);
  };

  const getDeckStats = (deckID) => {
    if (!data) return { total: 0, dealt: 0, remaining: 0 };

    const deck = data.find((d) => d.deckID === deckID);
    if (!deck) return { total: 0, dealt: 0, remaining: 0 };

    const total = deck.deck.length;
    const dealt = deck.deck.filter((card) => card.isDealt).length;
    const remaining = total - dealt;

    return { total, dealt, remaining };
  };

  const resetMightDeckDataToInitial = async () => {
    await setDataAsync(initialData);
  };

  return {
    decks: data,
    isLoading,
    dealRandomCard,
    dealCard,
    resetDeck,
    resetAllDecks,
    clearActiveCards,
    getUndealtCards,
    getDeckStats,
    resetMightDeckDataToInitial,
  };
}
