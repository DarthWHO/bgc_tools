import { Box, Paper } from "@mui/material";
import MCharacterDetails from "./MCharacterDetails";

const MCharacterMain = ({ character, img, index }) => {
  console.log(img);
  const isCharRight = index % 2 === 0;

  return (
    <Box
      sx={{
        p: 1,
        maxWidth: "100%",
        margin: "0 auto",
        position: "relative",
        display: "inline-block",
      }}
    >
      <Box
        component="img"
        src={img}
        alt={character}
        height="25vw"
        sx={{
          transform: `scaleX(${isCharRight ? 1 : -1})`,
          display: "block",
        }}
      />
      <Paper
        elevation={5}
        sx={{
          position: "absolute",
          top: "3%",
          left: isCharRight ? "2%" : "auto",
          right: isCharRight ? "auto" : "2%",
          width: "58%",
          height: "94%",
          p: 0,
        }}
      >
        <MCharacterDetails character={character} />
      </Paper>
    </Box>
  );
};

export default MCharacterMain;
