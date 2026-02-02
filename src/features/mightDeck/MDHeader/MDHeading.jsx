import { useState } from "react";
import { Typography, Stack, Box } from "@mui/material";
import MDInstructions from "./MDInstructions";
import MDReset from "./MDReset";
import { useAppData } from "../../../hooks/useAppData";

const MDHeading = () => {
  const [instructionsOpen, setInstructionsOpen] = useState(false);
  const [resetOpen, setResetOpen] = useState(false);
  const { getOathswornActive } = useAppData();

  const isOathsworn = getOathswornActive();

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        px: 3,
      }}
    >
      <MDInstructions open={instructionsOpen} setOpen={setInstructionsOpen} />
      <Typography variant="h5" component="h5">
        {`${isOathsworn ? "OATHSWORN" : "ENEMY"} Might Deck`}
      </Typography>
      <MDReset open={resetOpen} setOpen={setResetOpen} />
    </Stack>
  );
};

export default MDHeading;
