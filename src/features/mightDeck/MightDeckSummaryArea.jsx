import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import { useMightDeckManager } from "../../hooks/useMightDeckManager";
import { useAppData } from "../../hooks/useAppData";
import {
  calculateTotalValue,
  calculateCrits,
  calculateMisses,
} from "../../utils/calculations";

function MightDeckSummaryArea() {
  const { decks, dealRandomCard, isLoading, getDeckStats } =
    useMightDeckManager();

  const { getOathswornActive, setOathswornActive } = useAppData();

  if (!decks) return null;

  const total = calculateTotalValue(decks, getOathswornActive());
  const misses = calculateMisses(decks, getOathswornActive());
  const crits = calculateCrits(decks, getOathswornActive());

  console.log(getOathswornActive());
  const whiteStats = getDeckStats("owhite");

  const executeFunction = (action, param) => {
    console.log("Executing action:", action, "with param:", param);
  };

  const handleDealRandom = (deckID) => {
    const card = dealRandomCard(deckID);
    if (card) {
      console.log("Dealt card:", card);
    }
  };

  const isRollDisabled = whiteStats.remaining === 0 || isLoading;

  return (
    <Card>
      <CardContent>
        <Box>
          <Grid container>
            <Grid size={{ xs: 3, md: 6 }}>
              <Box display="flex" justifyContent="flex-end">
                <Stack direction="column" spacing={0} pr={0} pt={2}>
                  <Typography variant="h5" component="p">
                    Total:
                  </Typography>
                  <Typography variant="h5" component="p">
                    Crits:
                  </Typography>
                  <Typography variant="h5" component="p">
                    Misses:
                  </Typography>
                </Stack>
              </Box>
            </Grid>
            <Grid size={{ xs: 3, md: 2 }}>
              <Stack direction="column" spacing={0} pl={3} pt={2}>
                <Typography variant="h5" component="p">
                  {total}
                </Typography>
                <Typography variant="h5" component="p">
                  {crits}
                </Typography>
                <Typography variant="h5" component="p">
                  {misses}
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
              <Box display="flex" justifyContent="flex-end">
                <Stack direction="column">
                  <Button
                    variant="contained"
                    disabled={isRollDisabled}
                    sx={{ width: "170px", m: 0 }}
                    onClick={() => handleDealRandom("owhite")}
                  >
                    Draw All
                  </Button>
                  <Button
                    variant="outlined"
                    disabled={false}
                    sx={{ width: "170px", m: 0 }}
                    onClick={() => setOathswornActive()}
                  >
                    Switch
                  </Button>
                  <Button
                    variant="outlined"
                    disabled={false}
                    sx={{ width: "170px", m: 0 }}
                    onClick={() => executeFunction("handleEndDraw")}
                  >
                    End Draw
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={null}
                    sx={{ width: "170px", m: 0 }}
                  >
                    Display Chances
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export default MightDeckSummaryArea;
