import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import MSearch from "./MSearch";
import MSettingsMain from "./MSettingsMain";
import MInstructions from "./MInstructions";

const MHeader = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [instructionsOpen, setInstructionsOpen] = useState(false);
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
      <MInstructions open={instructionsOpen} setOpen={setInstructionsOpen} />
      <MSearch />
      <MSettingsMain open={settingsOpen} setOpen={setSettingsOpen} />
    </Stack>
  );
};

export default MHeader;
