import { Grid } from "@mui/material";
import MDCard from "./MDCard";

const HIDE = false;

const MDCardsArea = ({ colour, deckId }) => {
  if (HIDE) return null;
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={2}
      p={0.5}
      sx={{ backgroundColor: "text.disabled" }}
    >
      <MDCard colour={colour} deckId={deckId} />
      <MDCard colour={colour} deckId={deckId} />
      <MDCard colour={colour} deckId={deckId} />
      <MDCard colour={colour} deckId={deckId} />
      <MDCard colour={colour} deckId={deckId} />
      <MDCard colour={colour} deckId={deckId} />
    </Grid>
  );
};

export default MDCardsArea;
