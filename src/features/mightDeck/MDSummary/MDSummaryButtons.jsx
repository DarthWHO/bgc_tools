import { Button, Stack } from "@mui/material";
import { useMightDeckManager } from "../../../hooks/useMightDeckManager";
import { useAppData } from "../../../hooks/useAppData";

const MDSummaryButtons = () => {
  const { decks, dealRandomCard, isLoading, getDeckStats } =
    useMightDeckManager();
  const { setOathswornActive } = useAppData();
  if (!decks) return null;
  const whiteStats = getDeckStats("owhite");

  const handleDealRandom = (deckID) => {
    const card = dealRandomCard(deckID);
    if (card) {
      console.log("Dealt card:", card);
    }
  };
  const isRollDisabled = whiteStats.remaining === 0 || isLoading;
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
        disabled={isRollDisabled}
        sx={{ width: "170px" }}
        onClick={() => handleDealRandom("owhite")}
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
