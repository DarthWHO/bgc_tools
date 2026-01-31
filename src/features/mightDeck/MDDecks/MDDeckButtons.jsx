import { Button, Stack } from "@mui/material";
import { useCardsToDraw } from "../../../hooks/useCardsToDraw";
import { useMightDeckManager } from "../../../hooks/useMightDeckManager";
import { useDeckDraw } from "../../../hooks/useDeckDraw";

const buttonWidth = "155px";

const MDDeckButtons = ({ colour, deckId }) => {
  const { getCardsToDraw } = useCardsToDraw();
  const { isLoading, shuffleDeck } = useMightDeckManager();
  const { drawFromDeck } = useDeckDraw();
  const drawCount = getCardsToDraw(deckId);

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
        <Button variant="outlined" sx={{ width: buttonWidth, m: 0 }}>
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
        onClick={() => drawFromDeck(deckId)}
      >
        {`Draw ${drawCount === 0 ? "" : drawCount} ${colour}`}
      </Button>
    </Stack>
  );
};

export default MDDeckButtons;
