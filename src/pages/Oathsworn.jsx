import { useDeckManager } from "../hooks/useMightDeckManager";

function Oathsworn() {
  const {
    decks,
    isLoading,
    dealRandomCard,
    resetDeck,
    getDeckStats,
    getUndealtCards,
  } = useDeckManager();

  const handleDealRandom = (deckID) => {
    const card = dealRandomCard(deckID);
    if (card) {
      console.log("Dealt card:", card);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  const whiteStats = getDeckStats("owhite");

  return (
    <div>
      <h1>Oathsworn Card Manager</h1>

      <button onClick={() => handleDealRandom("owhite")}>
        Deal Random White Card ({whiteStats.remaining} remaining)
      </button>

      <button onClick={() => resetDeck("owhite")}>Reset White Deck</button>

      <pre>{JSON.stringify(decks, null, 2)}</pre>
    </div>
  );
}

export default Oathsworn;
