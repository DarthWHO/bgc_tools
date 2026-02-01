import { Stack, Box } from "@mui/material";

import MDHeading from "../features/mightDeck/MDHeader/MDHeading";
import MDSummaryArea from "../features/mightDeck/MDSummary/MDSummaryArea";
import MDDecksArea from "../features/mightDeck/MDDecks/MDDecksArea";

const Oathsworn = () => {
  return (
    <Box sx={{ maxWidth: "1920px", margin: "0 auto" }}>
      <Stack spacing={1} sx={{ p: 1 }}>
        <MDHeading />
        <MDSummaryArea />
        <MDDecksArea />
      </Stack>
    </Box>
  );
};

export default Oathsworn;
