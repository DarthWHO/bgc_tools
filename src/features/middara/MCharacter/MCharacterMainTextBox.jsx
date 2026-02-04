import { Grid, Paper, Typography, Stack } from "@mui/material";
import IconProvider from "../svgComponents/IconProvider";
import { diceColours } from "../../../utils/middaraConstants";

const titles = [
  "When my turn starts",
  "When I want to move",
  "When I roll conviction",
  "When I cast a spell",
  "When I am attacked",
  "When I attack",
  "When I hit",
  "Other",
];

const MCharacterMainTextBox = ({ index }) => {
  const diceColourValues = diceColours;
  return (
    <Grid size={{ xs: 3 }}>
      <Paper
        elevation={3}
        sx={{
          height: "100%",
          backgroundColor: "text.disabled",
          color: "black",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Stack sx={{ m: 0, p: 0 }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            {titles[index]}
          </Typography>
          <Stack
            direction="row"
            spacing={0}
            sx={{ m: 0, alignItems: "center", justifyContent: "center" }}
          >
            <IconProvider
              icon="CubeWhite"
              fillColour={diceColourValues.purple.fill}
              width={24}
              height={24}
            />
            <IconProvider
              icon="CubeWhite"
              fillColour={diceColourValues.purple.fill}
              width={24}
              height={24}
            />
            <IconProvider
              icon="CubeWhite"
              fillColour={diceColourValues.black.fill}
              width={24}
              height={24}
            />
          </Stack>
          <Typography variant="caption" p={0} m={0} sx={{ fontWeight: "bold" }}>
            Passive
          </Typography>
          <Typography variant="caption" p={0} m={0}>
            Range = 5
          </Typography>
          <Typography variant="caption" p={0} m={0}>
            Attack or Spell: Empower
          </Typography>
          <Typography variant="caption" p={0} m={0} sx={{ fontWeight: "bold" }}>
            Exhaust
          </Typography>
          <Typography variant="caption" p={0} m={0}>
            +1 Attack Roll
          </Typography>
          <Typography variant="caption" p={0} m={0}>
            +1 Attack Roll
          </Typography>
          <Typography variant="caption" p={0} m={0}>
            Re-roll single die except black
          </Typography>
          <Typography variant="caption" p={0} m={0}>
            Target can't dodge
          </Typography>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default MCharacterMainTextBox;
