import List from "@mui/material/List";
import MDInstuctionsListItem from "./MDInstructionsListItem";

const instructions = [
  {
    id: 0,
    primary:
      "Select how many to draw from each deck. Click 'Draw X Cards' or Draw 'Colour' from each deck individually",
    secondary:
      "If you draw more than available, it will draw all remaining cards and shuffle any cards not in play and continue drawing",
  },
  {
    id: 1,
    primary: "Click on 'End Draw' to clear the drawn cards",
    secondary: "",
  },
  {
    id: 2,
    primary: "Click on 'Shuffle' to manually shuffle a deck",
    secondary: "Remember to use your token!",
  },
  {
    id: 3,
    primary: "CRIT: if a crit is drawn, be sure to draw additional cards",
    secondary: "Misses on crits will not count towards your total misses.",
  },
  {
    id: 4,
    primary: "Switch between Oathsworn and Enemy using the 'Switch' button",
    secondary:
      "Note: will NOT end the current draw allowing you to plan ahead viewing what is remaining for the enemy or vice versa",
  },
];

const MDInstructionsList = () => {
  const dense = true;

  return (
    <List dense={dense}>
      {instructions.map((instruction) => {
        return (
          <MDInstuctionsListItem
            key={instruction.id}
            primary={instruction.primary}
            secondary={instruction.secondary}
          />
        );
      })}
    </List>
  );
};

export default MDInstructionsList;
