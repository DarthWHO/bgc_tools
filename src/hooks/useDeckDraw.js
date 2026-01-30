import { useCallback } from "react";
import { useMightDeckManager } from "./useMightDeckManager";
import { useCardsToDraw } from "./useCardsToDraw";

export function useDeckDraw() {
  const { dealMultipleRandomCards } = useMightDeckManager();
  const { getCardsToDraw, resetCardsToDraw, resetMultipleDecks } =
    useCardsToDraw();

  const drawFromDeck = useCallback(
    async (deckId) => {
      const count = getCardsToDraw(deckId);
      if (!count || count <= 0) return;

      await dealMultipleRandomCards(deckId, count);
      resetCardsToDraw(deckId);
    },
    [dealMultipleRandomCards, getCardsToDraw, resetCardsToDraw],
  );

  const drawFromMultipleDecks = useCallback(
    async (deckIds) => {
      const drawRequests = deckIds
        .map((deckId) => ({
          deckId,
          count: getCardsToDraw(deckId),
        }))
        .filter((req) => req.count > 0);

      for (const { deckId, count } of drawRequests) {
        await dealMultipleRandomCards(deckId, count);
      }

      resetMultipleDecks(drawRequests.map((req) => req.deckId));
    },
    [dealMultipleRandomCards, getCardsToDraw, resetMultipleDecks],
  );

  return { drawFromDeck, drawFromMultipleDecks };
}
