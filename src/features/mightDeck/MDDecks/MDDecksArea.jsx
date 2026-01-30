import { Card, Box, Grid } from "@mui/material";
import MDDeckMain from "./MDDeckMain";

const MDDecksArea = () => {
  const colours = ["white", "yellow", "red", "black"];
  return (
    <Grid container spacing={1}>
      {colours.map((colour) => (
        <Grid key={colour} size={{ xs: 12, md: 6, lg: 3 }}>
          <MDDeckMain colour={colour} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MDDecksArea;
