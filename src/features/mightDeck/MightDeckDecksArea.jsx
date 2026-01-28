import { Box, Grid } from "@mui/material";
import MightDeckMain from "./MightDeckMain";

function MightDeckDecksArea() {
  const colours = ["White", "Yellow", "Red", "Black"];
  return (
    <>
      {colours.map((colour) => (
        <Grid key={colour} size={{ xs: 12, md: 6, lg: 3 }}>
          <Box
            border={1}
            borderColor={colour.toLowerCase()}
            borderRadius={2}
            p={1}
            m={0.5}
            textAlign="center"
          >
            <MightDeckMain />
          </Box>
        </Grid>
      ))}
    </>
  );
}

export default MightDeckDecksArea;
