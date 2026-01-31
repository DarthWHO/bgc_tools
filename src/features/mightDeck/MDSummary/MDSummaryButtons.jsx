import { Button, Stack } from "@mui/material";
import toast from "react-hot-toast";
import { useMightDeckManager } from "../../../hooks/useMightDeckManager";
import { useAppData } from "../../../hooks/useAppData";
import { getAllDeckIds } from "../../../utils/deckConstants";
import { useCardsToDraw } from "../../../hooks/useCardsToDraw";

const buttonWidth = "155px";

const MDSummaryButtons = () => {
  const { decks, isLoading, endDraw, dealFromMultipleDecks } =
    useMightDeckManager();
  const { setOathswornActive, getOathswornActive } = useAppData();
  const { getCardCountByPrefix, resetMultipleDecks } = useCardsToDraw();
  const prefix = getOathswornActive() ? "o" : "e";
  const totalCardsToDraw = getCardCountByPrefix(prefix);

  if (!decks) return null;

  const deckIds = getAllDeckIds(getOathswornActive());

  const handleDrawAll = async () => {
    const decksWithCounts = deckIds
      .map((deckId) => ({
        deckID: deckId,
        count: getCardCountByPrefix(deckId),
      }))
      .filter((d) => d.count > 0);

    if (decksWithCounts.length > 0) {
      await dealFromMultipleDecks(decksWithCounts);
      resetMultipleDecks(deckIds);
    }
  };

  const isDrawAllDisabled = isLoading || totalCardsToDraw === 0;

  return (
    <Stack
      direction="column"
      spacing={1}
      mr={1}
      sx={{
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <Button
        variant="contained"
        disabled={isDrawAllDisabled}
        sx={{ width: buttonWidth }}
        onClick={handleDrawAll}
      >
        {`Draw ${totalCardsToDraw === 0 ? "" : totalCardsToDraw} Cards`}
      </Button>
      <Button
        variant="outlined"
        disabled={false}
        sx={{ width: buttonWidth }}
        onClick={() => {
          toast.success(
            `Switched to ${getOathswornActive() ? "Enemy" : "Oathsworn"} Decks`,
          );
          setOathswornActive();
        }}
      >
        Switch
      </Button>
      <Button
        variant="outlined"
        disabled={false}
        sx={{ width: buttonWidth }}
        onClick={() => endDraw(getOathswornActive())}
      >
        End Draw
      </Button>
    </Stack>
  );
};

export default MDSummaryButtons;
