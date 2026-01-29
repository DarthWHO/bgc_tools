import { Box, Grid, Typography, Stack } from "@mui/material";
import MDInstructions from "./MDInstructions";
import MDHistory from "./MDHistory";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useAppData } from "../../../hooks/useAppData";
import { useMightDeckManager } from "../../../hooks/useMightDeckManager";

const MDHeading = () => {
  const { getOathswornActive, resetAppDataToInitial } = useAppData();
  const { resetMightDeckDataToInitial } = useMightDeckManager();
  const isOathsworn = getOathswornActive();

  const handleReset = () => {
    resetAppDataToInitial();
    resetMightDeckDataToInitial();
  };
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <MDInstructions />
      <Typography variant="h5" component="h5">
        {`${isOathsworn ? "Oathsworn" : "Enemy"} Might Deck`}
      </Typography>
      <RestartAltIcon onClick={() => handleReset()} cursor="pointer" />
    </Stack>
  );
};

export default MDHeading;
