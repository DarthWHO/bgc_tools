import {
  Card,
  CardActions,
  Stack,
  CardContent,
  CardHeader,
} from "@mui/material";

import NumberSpinner from "../../../ui/NumberSpinner";
import { useCardsToDraw } from "../../../hooks/useCardsToDraw";

import MDDeckSummary from "./MDDeckSummary";
import MDDeckButtons from "./MDDeckButtons";
import MDCardsArea from "./MDCardsArea";

const MDDeckMain = ({ colour, deckId }) => {
  const { getCardsToDraw, setCardsToDraw } = useCardsToDraw();
  const drawCount = getCardsToDraw(deckId);

  const handleDrawCountChange = (nextValue) => {
    setCardsToDraw(deckId, nextValue);
  };

  return (
    <Card>
      <CardHeader
        title={`${colour.charAt(0).toUpperCase() + colour.slice(1)} Deck`}
        sx={{ textAlign: "center", p: 0.5, m: 0 }}
      />
      <CardContent sx={{ p: 1, pt: 0 }}>
        <Stack direction="row" spacing={2}>
          <Stack spacing={1} flexGrow={1} sx={{ alignItems: "center", mb: 0 }}>
            <MDDeckSummary deckId={deckId} />
            <NumberSpinner
              min={0}
              max={18}
              value={drawCount}
              size="small"
              onValueChange={handleDrawCountChange}
            />
          </Stack>
          <MDDeckButtons colour={colour} deckId={deckId} />
        </Stack>
      </CardContent>
      <CardActions
        sx={{
          width: "100%",
          p: 0,
          pt: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MDCardsArea colour={colour} deckId={deckId} />
      </CardActions>
    </Card>
  );
};

export default MDDeckMain;
