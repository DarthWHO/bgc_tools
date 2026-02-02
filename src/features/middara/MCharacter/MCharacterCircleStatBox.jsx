import { Box } from "@mui/material";
import IconProvider from "../svgComponents/IconProvider";

const MCharacterCircleStatBox = ({ character, stats }) => {
  return (
    <Box
      sx={{
        bgcolor: "#E54A2E",
        height: "50px",
        width: "50px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconProvider icon="Health" fillColour="#FED8A1" />
    </Box>
  );
};

export default MCharacterCircleStatBox;
