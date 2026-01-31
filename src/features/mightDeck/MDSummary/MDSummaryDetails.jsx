import { Stack, Typography } from "@mui/material";

import { useMightDeckManager } from "../../../hooks/useMightDeckManager";
import { useAppData } from "../../../hooks/useAppData";
import {
  calculateTotalValue,
  calculateCrits,
  calculateMisses,
} from "../../../utils/calculations";

const MDSummaryDetails = () => {
  const { decks } = useMightDeckManager();
  const { getOathswornActive } = useAppData();
  if (!decks) return null;
  const total = calculateTotalValue(decks, getOathswornActive());
  const misses = calculateMisses(decks, getOathswornActive());
  const crits = calculateCrits(decks, getOathswornActive());

  const isTooManyMisses = getOathswornActive() && misses > 1;

  return (
    <Stack
      direction="column"
      spacing={1}
      mr={{ xs: 5, md: 24 }}
      sx={{
        justifyContent: "space-around",
        alignItems: "right",
      }}
    >
      <Typography
        variant="h5"
        component="p"
        align="right"
        sx={{
          fontWeight: isTooManyMisses ? "bold" : "normal",
          color: isTooManyMisses ? "red" : "inherit",
          textDecoration: isTooManyMisses ? "line-through" : "none",
        }}
      >
        {`Total: ${total}`}
      </Typography>
      {getOathswornActive() && (
        <Typography variant="h5" component="p" align="right">
          {`Crits: ${crits}`}
        </Typography>
      )}
      {!getOathswornActive() && (
        <Typography variant="h7" component="p" align="right">
          {`Not affected by crits`}
        </Typography>
      )}

      {getOathswornActive() && (
        <Typography variant="h5" component="p" align="right">
          {`Misses: ${misses}`}
        </Typography>
      )}
      {!getOathswornActive() && (
        <Typography variant="h7" component="p" align="right">
          {`Not affected by misses`}
        </Typography>
      )}
    </Stack>
  );
};

export default MDSummaryDetails;
