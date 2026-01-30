import { Card, Grid } from "@mui/material";

import { useMightDeckManager } from "../../../hooks/useMightDeckManager";

import MDSummaryButtons from "./MDSummaryButtons";
import MDSummaryDetails from "./MDSummaryDetails";

const MDSummaryArea = () => {
  const { decks } = useMightDeckManager();
  if (!decks) return null;

  return (
    <Card container>
      <Grid container spacing={2} sx={{ m: 2 }}>
        <Grid size={{ xs: 6, md: 8 }}>
          <MDSummaryDetails />
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <MDSummaryButtons />
        </Grid>
      </Grid>
    </Card>
  );
};

export default MDSummaryArea;
