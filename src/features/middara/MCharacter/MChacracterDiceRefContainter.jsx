import { useState } from "react";
import { Box, Grid, Stack, Typography, Paper, Popover } from "@mui/material";
import IconProvider from "../svgComponents/IconProvider";
import MCharacterStatPopover from "./MCharacterStatPopover";

const MChacracterDiceRefContainter = ({ type }) => {
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
      <Grid>
        <Paper
          onClick={handlePopoverOpen}
          elevation={2}
          p={2}
          sx={{ minWidth: 150, border: "1px solid", cursor: "pointer" }}
        >
          <Box p={1} display="flex" justifyContent="center" alignItems="center">
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body2">{type}</Typography>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <IconProvider
                  icon="CubeWhite"
                  fillColour={"#5F4FA0"}
                  width={22}
                  height={22}
                />
                <IconProvider
                  icon="CubeWhite"
                  fillColour={"#5F4FA0"}
                  width={22}
                  height={22}
                />
              </Stack>
            </Stack>
          </Box>
        </Paper>
      </Grid>
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
        <Typography textAlign="center" p={2}>
          Modify Dice
        </Typography>
      </Popover>
    </>
  );
};

export default MChacracterDiceRefContainter;
