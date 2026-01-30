import {
  Card,
  CardActions,
  Grid,
  Stack,
  Button,
  CardContent,
  CardHeader,
  Typography,
  Box,
} from "@mui/material";

import NumberSpinner from "../../../ui/NumberSpinner";

import MDDeckSummary from "./MDDeckSummary";
import MDDeckButtons from "./MDDeckButtons";
import MDCardsArea from "./MDCardsArea";

const MDDeckMain = ({ colour }) => {
  return (
    <Card>
      <CardHeader
        title={`${colour.charAt(0).toUpperCase() + colour.slice(1)} Deck`}
      />
      <CardContent>
        <Stack direction="row" spacing={2}>
          <Stack spacing={1} flexGrow={1} sx={{ alignItems: "center", mb: 0 }}>
            <MDDeckSummary />
            <NumberSpinner min={0} max={18} defaultValue={2} />
          </Stack>
          <MDDeckButtons colour={colour} />
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
        <MDCardsArea colour={colour} />
      </CardActions>
    </Card>
  );
};

export default MDDeckMain;
