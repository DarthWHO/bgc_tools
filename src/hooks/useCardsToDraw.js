import { useCallback, useMemo } from "react";

import { useLocalStorage } from "./useLocalStorage";

const DEFAULT_CARDS_TO_DRAW = 0;

export function useCardsToDraw(defaultValue = DEFAULT_CARDS_TO_DRAW) {
  const { data, isLoading, setData, isUpdating } = useLocalStorage(
    "oathswornCardsToDraw",
    {},
  );

  const normalizedData = useMemo(() => {
    if (!data || typeof data !== "object") {
      return {};
    }

    return data;
  }, [data]);

  const getCardsToDraw = useCallback(
    (deckId) => {
      if (!deckId) return defaultValue;

      const value = normalizedData[deckId];
      return typeof value === "number" && !Number.isNaN(value)
        ? value
        : defaultValue;
    },
    [defaultValue, normalizedData],
  );

  const setCardsToDraw = useCallback(
    (deckId, nextValue) => {
      if (!deckId) return;

      const parsedValue =
        typeof nextValue === "number" ? nextValue : Number(nextValue);
      const safeValue = Number.isNaN(parsedValue) ? 0 : parsedValue;

      setData({
        ...normalizedData,
        [deckId]: safeValue,
      });
    },
    [normalizedData, setData],
  );

  const resetCardsToDraw = useCallback(
    (deckId) => {
      if (!deckId) return;

      setData({
        ...normalizedData,
        [deckId]: defaultValue,
      });
    },
    [defaultValue, normalizedData, setData],
  );

  const resetMultipleDecks = useCallback(
    (deckIds) => {
      if (!deckIds || deckIds.length === 0) return;

      const updates = { ...normalizedData };
      deckIds.forEach((deckId) => {
        updates[deckId] = defaultValue;
      });
      setData(updates);
    },
    [defaultValue, normalizedData, setData],
  );

  const getCardCountByPrefix = useCallback(
    (prefix) => {
      if (!prefix) return 0;

      return Object.entries(normalizedData).reduce((sum, [key, value]) => {
        return key.startsWith(prefix) && typeof value === "number"
          ? sum + value
          : sum;
      }, 0);
    },
    [normalizedData],
  );

  return {
    isLoading,
    isUpdating,
    getCardsToDraw,
    setCardsToDraw,
    resetCardsToDraw,
    resetMultipleDecks,
    getCardCountByPrefix,
  };
}
