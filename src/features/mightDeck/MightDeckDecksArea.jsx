import { Card, Grid } from "@mui/material";
import MightDeckMain from "./MightDeckMain";

function MightDeckDecksArea() {
  const colours = ["White", "Yellow", "Red", "Black"];
  return (
    <>
      {colours.map((colour) => (
        <Grid key={colour} size={{ xs: 12, md: 6, lg: 3 }}>
          <Card>
            <MightDeckMain colour={colour.toLowerCase()} />
          </Card>
        </Grid>
      ))}
    </>
  );
}

export default MightDeckDecksArea;
