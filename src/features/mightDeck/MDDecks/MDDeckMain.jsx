import { Card, CardActions, Grid } from "@mui/material";

import MDDeckSummary from "./MDDeckSummary";
import MDDeckButtons from "./MDDeckButtons";
import MDCardsArea from "./MDCardsArea";

const MDDeckMain = () => {
  return (
    <Card>
      <Grid>
        <Grid container spacing={1}>
          <Grid>
            <MDDeckSummary />
          </Grid>
          <Grid>
            <MDDeckButtons />
          </Grid>
        </Grid>

        <Grid container>
          <MDCardsArea />
        </Grid>
      </Grid>
      <CardActions></CardActions>
    </Card>
  );
};

export default MDDeckMain;
