import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import MSearch from "./MSearch";
import MSettingsMain from "./MSettingsMain";
import MInstructions from "./MInstructions";

const MHeader = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
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
      <MInstructions open={settingsOpen} setOpen={setSettingsOpen} />
      <MSearch />
      <MSettingsMain open={settingsOpen} setOpen={setSettingsOpen} />
    </Stack>
  );
};

export default MHeader;
