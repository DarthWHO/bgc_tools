import { Card, CardActions, Grid } from "@mui/material";

function MightDeckMain() {
  const deckBackground = "rgb(255, 255, 255, 0.2)";

  return (
    <Card>
      <Grid>
        <Grid container spacing={1}>
          <Grid size={{ xs: 6, md: 6 }}>Deck Summary</Grid>
          <Grid size={{ xs: 6, md: 6 }}>DeckButtons</Grid>
        </Grid>

        <Grid container rowSpacing={1} columnSpacing={2} p={1} pb={0}>
          DeckCardsArea
        </Grid>
      </Grid>
      <CardActions></CardActions>
    </Card>
  );
}

export default MightDeckMain;
