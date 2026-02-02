import { Box, Paper } from "@mui/material";
// import MCharacterDetails from "./MCharacterDetails";

const MCharacterMain = ({ character, img, index }) => {
  console.log(img);
  const isCharRight = index % 2 === 0;

  return (
    <Paper square={false} elevation={16} sx={{ height: "25vw", width: "100%" }}>
      <Box>{character}</Box>
    </Paper>
  );
};

export default MCharacterMain;
