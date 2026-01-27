import { useMightDeckManager } from "../../hooks/useMightDeckManager";
import {
  calculateTotalValue,
  calculateCrits,
  calculateMisses,
} from "../../utils/calculations";

function MightDeckSummaryArea() {
  const { decks, dealRandomCard, resetDeck, isLoading, getDeckStats } =
    useMightDeckManager();
  if (!decks) return null;

  const total = calculateTotalValue(decks, true);
  const misses = calculateMisses(decks, true);
  const crits = calculateCrits(decks, true);

  const whiteStats = getDeckStats("owhite");

  const handleDealRandom = (deckID) => {
    const card = dealRandomCard(deckID);
    if (card) {
      console.log("Dealt card:", card);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <h1>Oathsworn Card Manager</h1>
      <div>Total Value of Active Cards: {total}</div>
      <div>Total Crits: {crits}</div>
      <div>Total Misses: {misses}</div>
      <button onClick={() => handleDealRandom("owhite")}>
        Deal Random White Card ({whiteStats.remaining} remaining)
      </button>

      <button onClick={() => resetDeck("owhite")}>Reset White Deck</button>

      <pre>{JSON.stringify(decks, null, 2)}</pre>
    </div>
  );
}

export default MightDeckSummaryArea;
