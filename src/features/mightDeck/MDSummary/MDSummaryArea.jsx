import { Grid } from "@mui/material";

import { useMightDeckManager } from "../../../hooks/useMightDeckManager";

import MDSummaryButtons from "./MDSummaryButtons";
import MDSummaryDetails from "./MDSummaryDetails";

const MDSummaryArea = () => {
  const { decks } = useMightDeckManager();
  if (!decks) return null;

  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid size={{ xs: 6, md: 8 }}>
        <MDSummaryDetails />
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        <MDSummaryButtons />
      </Grid>
    </Grid>
  );
};

export default MDSummaryArea;
