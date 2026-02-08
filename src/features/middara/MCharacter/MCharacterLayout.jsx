import { Paper, Stack, Grid } from "@mui/material";
import MCharacterName from "./MCharacterName";
import MCharacterAvatar from "./MCharacterAvatar";
import MCharacterCircleStatBox from "./MCharacterCircleStatBox";
import MCharacterSPCircleContainer from "./MCharacterSPCircleContainer";
import MCharacterMainContent from "./MCharacterMainContent";
import MChacracterDiceRefContainter from "./MChacracterDiceRefContainter";

const MCharacterLayout = ({ character, img }) => {
  return (
    <Grid
      key={character}
      size={{ xs: 12, sm: 12, md: 12, lg: 6 }}
      p={2}
      display="flex"
      justifyContent="center"
    >
      <Paper
        elevation={12}
        sx={{
          maxWidth: 800,
          minWidth: 440,
          p: 2,
        }}
      >
        <Stack spacing={2}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid container spacing={2} m="auto">
              <Grid xs={12} md={4} m="auto">
                <Stack direction="row" spacing={2} m="auto" alignItems="center">
                  <MCharacterAvatar img={img} />
                  <Stack direction="column" spacing={2} m="auto">
                    <MCharacterName character={character} />
                    <MCharacterSPCircleContainer />
                  </Stack>
                </Stack>
              </Grid>

              <Grid xs={12} md={4} m="auto">
                <Stack direction="column" spacing={2} m="auto">
                  <MCharacterCircleStatBox statType="core" />
                  <MCharacterCircleStatBox statType="other" />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <MChacracterDiceRefContainter type="Attack" />
              <MChacracterDiceRefContainter type="Spell" />
              <MChacracterDiceRefContainter type="Conviction" />
            </Grid>
          </Stack>
          <MCharacterMainContent />
        </Stack>
      </Paper>
    </Grid>
  );
};

export default MCharacterLayout;
