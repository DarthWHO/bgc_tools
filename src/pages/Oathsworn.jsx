import { Stack } from "@mui/material";

import MDHeading from "../features/mightDeck/MDHeader/MDHeading";
import MDSummaryArea from "../features/mightDeck/MDSummary/MDSummaryArea";
import MDDecksArea from "../features/mightDeck/MDDecks/MDDecksArea";

const Oathsworn = () => {
  return (
    <Stack spacing={1} sx={{ p: 1 }}>
      <MDHeading />
      <MDSummaryArea />
      <MDDecksArea />
    </Stack>
  );
};

export default Oathsworn;
