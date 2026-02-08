import { Stack } from "@mui/material";
import MCharacterSPCircle from "./MCharacterSPCircle";

const MCharacterSPCircleContainer = () => {
  const count = 6;
  const circleComponents = Array.from({ length: count }).map((_, index) => (
    <MCharacterSPCircle key={index} index={index} />
  ));
  return (
    <Stack direction="row" spacing={1} p={0} justifyContent="flex-start">
      {circleComponents}
    </Stack>
  );
};

export default MCharacterSPCircleContainer;
