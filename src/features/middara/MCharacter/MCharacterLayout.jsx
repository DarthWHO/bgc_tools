import { Paper, Stack, Grid, Typography, Box } from "@mui/material";
import MCharacterName from "./MCharacterName";
import MCharacterAvatar from "./MCharacterAvatar";
import MCharacterCircleStatBox from "./MCharacterCircleStatBox";
import MCharacterSPCircleContainer from "./MCharacterSPCircleContainer";
import MCharacterMainContent from "./MCharacterMainContent";
import IconProvider from "../svgComponents/IconProvider";

const MCharacterLayout = ({ character, img }) => {
  const headerTabs = [
    { label: "Attack", dice: ["#800080", "#800080", "#000000"] },
    { label: "Spell", dice: ["#800080", "#800080", "#000000"] },
    { label: "Conviction", dice: ["#800080", "#800080", "#000000"] },
  ];

  return (
    <Paper
      square={false}
      elevation={12}
      sx={{
        borderRadius: 2,
        border: "1px solid #2b2b2b",
        p: 2,
      }}
    >
      <Stack spacing={2}>
        <Stack direction="row" spacing={2} alignItems="center">
          <MCharacterAvatar img={img} />
          <Stack spacing={1} flexGrow={1} minWidth={0}>
            <MCharacterName character={character} />
            <MCharacterCircleStatBox />
          </Stack>
          <Stack spacing={1} alignItems="flex-end">
            <MCharacterSPCircleContainer />
            <MCharacterCircleStatBox statType="other" />
          </Stack>
        </Stack>

        <Grid container spacing={1.5}>
          {headerTabs.map((tab) => (
            <Grid key={tab.label} item xs={12} md={4}>
              <Box
                sx={{
                  bgcolor: "#2f2f2f",
                  borderRadius: 1,
                  border: "1px solid #454545",
                  px: 2,
                  py: 1,
                }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 700, letterSpacing: "0.04em" }}
                  >
                    {tab.label}
                  </Typography>
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    {tab.dice.map((fillColour, index) => (
                      <IconProvider
                        key={`${tab.label}-die-${index}`}
                        icon="CubeWhite"
                        fillColour={fillColour}
                        width={22}
                        height={22}
                      />
                    ))}
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Paper>
  );
};

export default MCharacterLayout;
