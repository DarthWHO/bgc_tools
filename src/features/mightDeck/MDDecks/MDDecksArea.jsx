import { Card, Box, Grid } from "@mui/material";
import MDDeckMain from "./MDDeckMain";
import { useAppData } from "../../../hooks/useAppData";

const MDDecksArea = () => {
  const colours = ["white", "yellow", "red", "black"];
  const { getOathswornActive: isOathSwornActive } = useAppData();

  return (
    <Grid container spacing={1}>
      {colours.map((colour) => (
        <Grid key={colour} size={{ xs: 12, md: 6, lg: 3 }}>
          <MDDeckMain
            colour={colour}
            deckId={`${isOathSwornActive() ? "o" : "e"}${colour}`}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MDDecksArea;
