import { Button, Stack } from "@mui/material";
import { useCardsToDraw } from "../../../hooks/useCardsToDraw";
import { useMightDeckManager } from "../../../hooks/useMightDeckManager";
import { useAppData } from "../../../hooks/useAppData";

const buttonWidth = "155px";

const MDDeckButtons = ({ colour, deckId }) => {
  const { getCardsToDraw, setCardsToDraw } = useCardsToDraw();
  const { getOathswornActive } = useAppData();
  const {
    isLoading,
    shuffleDeck,
    dealMultipleRandomCards,
    redrawSelectedNonCritCards,
    redrawSelectedCritCards,
    getSelectedNonCritCardCount,
    getSelectedCritCardCount,
  } = useMightDeckManager();

  const drawCount = getCardsToDraw(deckId);

  if (!deckId) return null;

  const handleDraw = () => {
    dealMultipleRandomCards(deckId, drawCount);
    setCardsToDraw(deckId, 0);
  };

  const handleNonCritRedraw = () => {
    redrawSelectedNonCritCards(deckId);
  };

  const handleCritRedraw = () => {
    redrawSelectedCritCards(deckId);
  };

  return (
    <Stack
      direction="column"
      spacing={1}
      sx={{
        justifyContent: "flex-end",
        alignItems: "center",
        m: 0,
        p: 0,
        pb: 0,
      }}
    >
      <Stack spacing={1}>
        <Button
          variant="outlined"
          sx={{ width: buttonWidth, m: 0 }}
          onClick={() => shuffleDeck(deckId)}
          disabled={!getOathswornActive()}
        >
          {getOathswornActive() ? "Shuffle" : "Shuffle (N/A)"}
        </Button>
        <Button
          variant="outlined"
          sx={{ width: buttonWidth, m: 0 }}
          disabled={
            getSelectedNonCritCardCount(deckId) === 0 || !getOathswornActive()
          }
          onClick={handleNonCritRedraw}
        >
          {getOathswornActive()
            ? `Re-Draw (${getSelectedNonCritCardCount(deckId)})`
            : "Re-Draw (N/A)"}
        </Button>

        <Button
          variant="outlined"
          disabled={
            getSelectedCritCardCount(deckId) === 0 || !getOathswornActive()
          }
          sx={{ width: buttonWidth, m: 0 }}
          onClick={handleCritRedraw}
        >
          {getOathswornActive()
            ? `Crits (${getSelectedCritCardCount(deckId)})`
            : "Crits (N/A)"}
        </Button>
      </Stack>
      <Button
        variant="contained"
        sx={{ width: buttonWidth, m: 0 }}
        disabled={isLoading || drawCount <= 0}
        onClick={handleDraw}
      >
        {`Draw ${drawCount === 0 ? "" : drawCount} ${colour}`}
      </Button>
    </Stack>
  );
};

export default MDDeckButtons;
