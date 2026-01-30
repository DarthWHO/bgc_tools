import { Button, Stack } from "@mui/material";
import { useCardsToDraw } from "../../../hooks/useCardsToDraw";
import { useMightDeckManager } from "../../../hooks/useMightDeckManager";
import { useDeckDraw } from "../../../hooks/useDeckDraw";

const MDDeckButtons = ({ colour, deckId }) => {
  const { getCardsToDraw } = useCardsToDraw();
  const { isLoading } = useMightDeckManager();
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
        pb: 1,
      }}
    >
      <Stack spacing={1}>
        <Button variant="outlined" sx={{ width: "160px", m: 0 }}>
          Shuffle
        </Button>
        <Button variant="outlined" sx={{ width: "160px", m: 0 }}>
          Re-Draw
        </Button>
        <Button
          variant="outlined"
          disabled={true}
          sx={{ width: "160px", m: 0 }}
        >
          Crits
        </Button>
      </Stack>
      <Button
        variant="contained"
        sx={{ width: "160px", m: 0 }}
        disabled={isLoading || drawCount <= 0}
        onClick={() => drawFromDeck(deckId)}
      >
        {`Draw ${drawCount} ${colour}`}
      </Button>
    </Stack>
  );
};

export default MDDeckButtons;
