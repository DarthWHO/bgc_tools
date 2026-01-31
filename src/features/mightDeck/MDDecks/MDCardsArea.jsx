import { Grid } from "@mui/material";
import MDCard from "./MDCard";
import { useMightDeckManager } from "../../../hooks/useMightDeckManager";

const HIDE = false;

const MDCardsArea = ({ colour, deckId }) => {
  const { getActiveCards } = useMightDeckManager();
  const activeCards = getActiveCards(deckId);

  if (activeCards.length === 0) return null;

  if (HIDE) return null;
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={2}
      p={0.5}
      sx={{ backgroundColor: "text.disabled", width: "100%" }}
    >
      {activeCards.map((card) => (
        <MDCard key={card.cardID} colour={colour} card={card} />
      ))}
    </Grid>
  );
};

export default MDCardsArea;
