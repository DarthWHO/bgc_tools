import { Button, Stack } from "@mui/material";
import { useMightDeckManager } from "../../../hooks/useMightDeckManager";
import { useAppData } from "../../../hooks/useAppData";
import { useDeckDraw } from "../../../hooks/useDeckDraw";
import { getAllDeckIds } from "../../../utils/deckConstants";

const MDSummaryButtons = () => {
  const { decks, isLoading, getDeckStats } = useMightDeckManager();
  const { setOathswornActive, getOathswornActive } = useAppData();
  const { drawFromMultipleDecks } = useDeckDraw();

  if (!decks) return null;

  const deckIds = getAllDeckIds(getOathswornActive());
  const allDecksEmpty = deckIds.every(
    (deckId) => getDeckStats(deckId).remaining === 0,
  );

  const isDrawAllDisabled = allDecksEmpty || isLoading;

  return (
    <Stack
      direction="column"
      spacing={1}
      mr={5}
      sx={{
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <Button
        variant="contained"
        disabled={isDrawAllDisabled}
        sx={{ width: "170px" }}
        onClick={() => drawFromMultipleDecks(deckIds)}
      >
        Draw All
      </Button>
      <Button
        variant="outlined"
        disabled={false}
        sx={{ width: "170px" }}
        onClick={() => setOathswornActive()}
      >
        Switch
      </Button>
      <Button
        variant="outlined"
        disabled={false}
        sx={{ width: "170px" }}
        onClick={() => null}
      >
        End Draw
      </Button>
    </Stack>
  );
};

export default MDSummaryButtons;
