import { Card, Grid } from "@mui/material";
import MDDeckMain from "./MDDeckMain";

const MDDecksArea = () => {
  const colours = ["White", "Yellow", "Red", "Black"];
  return (
    <>
      {colours.map((colour) => (
        <Grid key={colour} size={{ xs: 12, md: 6, lg: 3 }}>
          <Card>
            <MDDeckMain colour={colour.toLowerCase()} />
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default MDDecksArea;
