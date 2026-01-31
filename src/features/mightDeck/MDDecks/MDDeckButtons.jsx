import { Button, Stack } from "@mui/material";
import { useCardsToDraw } from "../../../hooks/useCardsToDraw";
import { useMightDeckManager } from "../../../hooks/useMightDeckManager";

const buttonWidth = "155px";

const MDDeckButtons = ({ colour, deckId }) => {
  const { getCardsToDraw, setCardsToDraw } = useCardsToDraw();
  const { isLoading, shuffleDeck, dealMultipleRandomCards } =
    useMightDeckManager();

  const drawCount = getCardsToDraw(deckId);

  if (!deckId) return null;

  const handleDraw = () => {
    dealMultipleRandomCards(deckId, drawCount);
    setCardsToDraw(deckId, 0);
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
        >
          Shuffle
        </Button>
        <Button
          variant="outlined"
          sx={{ width: buttonWidth, m: 0 }}
          disabled={true}
        >
          Re-Draw
        </Button>
        <Button
          variant="outlined"
          disabled={true}
          sx={{ width: buttonWidth, m: 0 }}
        >
          Crits
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
