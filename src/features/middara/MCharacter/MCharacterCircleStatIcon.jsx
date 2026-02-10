import { useState } from "react";
import {
  Box,
  Badge,
  useTheme,
  Stack,
  Typography,
  Popover,
} from "@mui/material";
import { statColours } from "../../../utils/middaraConstants";
import IconProvider from "../svgComponents/IconProvider";
import MCharacterStatPopover from "./MCharacterStatPopover";

const MCharacterCircleStatIcon = ({ stat }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const { bgColour, fillColour } = statColours(stat);

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
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            position: "absolute",
            bottom: "100%",
            left: "50%",
            transform: "translate(-50%, -4px)",
            lineHeight: 1,
            pointerEvents: "none",
            whiteSpace: "nowrap",
            fontSize: "0.70rem",
          }}
        >
          {stat}
        </Typography>
        <Box
          sx={{
            bgcolor: bgColour,
            height: "45px",
            width: "45px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Badge
            color="bgcTools.badge"
            badgeContent="8"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            sx={{
              "& .MuiBadge-badge": {
                border: `1px solid black`,
                bgcolor: theme.palette.bgcTools.badge,
                color: "black",
                fontWeight: "bold",
                fontSize: "16px", // Add your border here
              },
            }}
          >
            <IconProvider key={stat} icon={stat} fillColour={fillColour} />
          </Badge>
        </Box>
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
        <MCharacterStatPopover stat={stat} />
      </Popover>
    </>
  );
};

export default MCharacterCircleStatIcon;
