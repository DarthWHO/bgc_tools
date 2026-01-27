import MightDeckHeading from "../features/mightDeck/MightDeckHeading";
import MightDeckSummaryArea from "../features/mightDeck/MightDeckSummaryArea";
import MightDeckDecksArea from "../features/mightDeck/MightDeckDecksArea";
import { Box, Grid } from "@mui/material";

function Oathsworn() {
  return (
    <Box sx={{ flexGrow: 1, p: 1 }}>
      <Grid container spacing={1}>
        <Grid size={{ xs: 12, md: 12 }}>
          <MightDeckHeading />
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <MightDeckSummaryArea />
        </Grid>
        <MightDeckDecksArea />
      </Grid>
    </Box>
  );
}

export default Oathsworn;
