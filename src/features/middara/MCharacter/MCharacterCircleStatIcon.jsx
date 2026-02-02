import { Box } from "@mui/material";
import IconProvider from "../svgComponents/IconProvider";

let bgColour = "#E54A2E";
let fillColour = "#FED8A1";

const MCharacterCircleStatIcon = ({ stat }) => {
  return (
    <Box
      sx={{
        bgcolor: bgColour,
        height: "50px",
        width: "50px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconProvider icon={stat} fillColour={fillColour} />
    </Box>
  );
};

export default MCharacterCircleStatIcon;
