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

const MCharacterCircleStatBox = ({ statType = "core" }) => {
  const statsToUse = statType === "core" ? coreStats : secondaryStats;
  return (
    <Stack
      direction="row"
      spacing={0}
      justifyContent="space-between"
      alignItems="center"
      sx={{ height: "100%", width: "100%" }}
    >
      <Stack direction="row" spacing={2} ml={1}>
        {statsToUse.map((stat) => (
          <MCharacterCircleStatIcon key={stat} stat={stat} />
        ))}
      </Stack>
    </Stack>
  );
};

export default MCharacterCircleStatBox;
