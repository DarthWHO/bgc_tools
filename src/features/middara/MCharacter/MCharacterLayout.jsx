import { Box, Paper, Stack } from "@mui/material";
import MCharacterName from "./MCharacterName";
import MCharacterAvatar from "./MCharacterAvatar";
import MCharacterCircleStatBox from "./MCharacterCircleStatBox";
import MCharacterSPCircleContainer from "./MCharacterSPCircleContainer";

const MCharacterLayout = ({ character, img }) => {
  return (
    <Paper square={false} elevation={16} sx={{ height: "50vh", width: "100%" }}>
      <Stack direction="row" height="100%">
        <Box id="character-main-left" sx={{ height: "100%", width: "80%" }}>
          <Stack direction="column" height="100%">
            <Box
              id="character-title"
              sx={{
                height: "15%",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                display: "flex",
                px: 2,
              }}
            >
              <MCharacterName character={character} />
              <MCharacterSPCircleContainer />
            </Box>
            <Box
              id="character-main-content"
              sx={{ height: "70%", width: "100%" }}
            ></Box>
            <Box
              id="character-circle-stats"
              sx={{ height: "15%", width: "100%" }}
            >
              <MCharacterCircleStatBox character={character} />
            </Box>
          </Stack>
        </Box>
        <Box id="character-main-right" sx={{ height: "100%", width: "20%" }}>
          <Stack direction="column" height="100%">
            <Box
              id="character-avatar"
              sx={{
                height: "30%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MCharacterAvatar img={img} />
            </Box>
            <Box
              id="character-health-sp"
              sx={{ height: "70%", width: "100%" }}
            ></Box>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
};

export default MCharacterLayout;
