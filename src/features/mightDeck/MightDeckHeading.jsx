import { Box, Grid, Typography } from "@mui/material";
import MightDeckInstructions from "./MightDeckInstructions";
import MightDeckHistory from "./MightDeckHistory";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useAppData } from "../../hooks/useAppData";
import { useMightDeckManager } from "../../hooks/useMightDeckManager";

function MightDeckHeading() {
  const { getOathswornActive, resetAppDataToInitial } = useAppData();
  const { resetMightDeckDataToInitial } = useMightDeckManager();
  const isOathsworn = getOathswornActive();

  const handleReset = () => {
    resetAppDataToInitial();
    resetMightDeckDataToInitial();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid size={1}>
          <Box display="flex" alignItems="left" justifyContent="left">
            <MightDeckInstructions />
          </Box>
        </Grid>
        <Grid size={10}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h5" component="h5">
              {isOathsworn ? "Oathsworn" : "Enemy"} Might Deck
            </Typography>
          </Box>
        </Grid>
        <Grid size={1}>
          <Box display="flex" alignItems="right" justifyContent="right">
            <RestartAltIcon onClick={() => handleReset()} cursor="pointer" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MightDeckHeading;
