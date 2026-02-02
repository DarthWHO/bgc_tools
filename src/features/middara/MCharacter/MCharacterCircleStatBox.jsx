import { Box, Stack } from "@mui/material";
import MCharacterCircleStatIcon from "./MCharacterCircleStatIcon";

const coreStats = ["Health", "Defense", "Movement", "Armor"];
const secondaryStats = [
  "Presence",
  "Lore",
  "Agility",
  "Perception",
  "Strength",
];

const MCharacterCircleStatBox = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100%", width: "100%" }}
    >
      {coreStats.map((stat) => (
        <MCharacterCircleStatIcon key={stat} stat={stat} />
      ))}
      {secondaryStats.map((stat) => (
        <MCharacterCircleStatIcon key={stat} stat={stat} />
      ))}
    </Stack>
  );
};

export default MCharacterCircleStatBox;
