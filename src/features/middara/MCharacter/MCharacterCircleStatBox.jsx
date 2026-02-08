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
    <Box p={1} sx={{ display: "flex", justifyContent: "center" }}>
      <Stack direction="row" spacing={2} ml={1}>
        {statsToUse.map((stat) => (
          <MCharacterCircleStatIcon key={stat} stat={stat} />
        ))}
      </Stack>
    </Box>
  );
};

export default MCharacterCircleStatBox;
