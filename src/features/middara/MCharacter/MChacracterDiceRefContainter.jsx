import { Box, Grid, Stack, Typography, Paper } from "@mui/material";
import IconProvider from "../svgComponents/IconProvider";

const MChacracterDiceRefContainter = ({ type }) => {
  return (
    <Grid>
      <Paper elevation={2} p={2} sx={{ minWidth: 150, border: "1px solid" }}>
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
  );
};

export default MChacracterDiceRefContainter;
