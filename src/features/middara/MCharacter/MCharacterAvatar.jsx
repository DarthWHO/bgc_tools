import { useState } from "react";
import { Box, Paper, Typography, Popover } from "@mui/material";
import MCharacterStatPopover from "./MCharacterStatPopover";

const MCharacterAvatar = ({ img }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Box
        onClick={handlePopoverOpen}
        sx={{
          position: "relative",
          width: "fit-content",
          margin: "auto",
          cursor: "pointer",
        }}
      >
        <Paper
          component="img"
          elevation={6}
          sx={{
            height: "120px",
            width: "120px",
            objectFit: "fill",
            borderRadius: "50%",
            border: "3px solid #272727",
          }}
          alt="Character Avatar"
          src={img}
        />
        <Paper
          onClick={handlePopoverOpen}
          sx={{
            position: "absolute",
            width: "100%",
            bottom: -3,
            left: "50%",
            transform: "translateX(-50%)",
            border: "1px solid #272727",
            cursor: "pointer",
          }}
        >
          <Typography textAlign="center">Damage: 8</Typography>
        </Paper>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MCharacterStatPopover stat={"Damage"} />
      </Popover>
    </>
  );
};

export default MCharacterAvatar;
