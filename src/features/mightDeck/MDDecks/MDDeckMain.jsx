import {
  Card,
  CardActions,
  Grid,
  Stack,
  Box,
  CardContent,
  CardHeader,
} from "@mui/material";

import MDDeckSummary from "./MDDeckSummary";
import MDDeckButtons from "./MDDeckButtons";
import MDCardsArea from "./MDCardsArea";

const MDDeckMain = () => {
  return (
    <Card>
      <CardHeader title="Deck Title"></CardHeader>
      <CardContent>Current Details</CardContent>
      <CardActions>Buttons and Input</CardActions>
    </Card>
  );
};

export default MDDeckMain;
