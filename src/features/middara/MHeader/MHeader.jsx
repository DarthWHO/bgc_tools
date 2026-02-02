import { Stack, Typography } from "@mui/material";
import MSearch from "./MSearch";

const MHeader = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="space-between"
      alignItems="center"
      sx={{ padding: 1 }}
    >
      <Typography
        variant="h7"
        sx={{ flexGrow: 1, justifyContent: "left" }}
      ></Typography>
      <MSearch />
      <Typography
        variant="h7"
        sx={{ flexGrow: 1, justifyContent: "right" }}
      ></Typography>
    </Stack>
  );
};

export default MHeader;
