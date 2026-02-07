import { Box, Paper } from "@mui/material";

const MCharacterAvatar = ({ img }) => {
  return (
    <Paper
      component="img"
      elevation={6}
      sx={{
        display: "block",
        width: "100%",
        objectFit: "fill",
        borderRadius: "50%",
        margin: "auto",
        border: "3px solid #272727",
      }}
      alt="Character Avatar"
      src={img}
    />
  );
};

export default MCharacterAvatar;
