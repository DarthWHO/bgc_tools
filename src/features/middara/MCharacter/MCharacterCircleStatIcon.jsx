import { Box, Badge, useTheme, Stack, Typography } from "@mui/material";
import { statColours } from "../../../utils/middaraConstants";
import IconProvider from "../svgComponents/IconProvider";

const MCharacterCircleStatIcon = ({ stat }) => {
  const theme = useTheme();
  const { bgColour, fillColour } = statColours(stat);

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
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
          <IconProvider icon={stat} fillColour={fillColour} />
        </Badge>
      </Box>
    </Box>
  );
};

export default MCharacterCircleStatIcon;
