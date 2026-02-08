import { Grid } from "@mui/material";
import Remi from "../assets/images/remi.webp";
import Nightingale from "../assets/images/nightingale.webp";
import Rook from "../assets/images/rook.webp";
import Zeke from "../assets/images/zeke.webp";
import MCharacterLayout from "../MCharacter/MCharacterLayout";

// TODO: REPLACE WITH DYNAMIC DATA LATER
const activeCharacters = ["remi", "nightingale", "rook", "zeke"];

const characterStats = {
  remi: { hp: 30, sp: 10 },
  nightingale: { hp: 25, sp: 15 },
  rook: { hp: 40, sp: 5 },
  zeke: { hp: 35, sp: 8 },
};

// TODO: IMPORT ALL CHARACTER IMAGES HERE AND MAP TO NAMES
const characterImages = {
  remi: Remi,
  nightingale: Nightingale,
  rook: Rook,
  zeke: Zeke,
};

const MMain = () => {
  return (
    <Grid container direction="row">
      {activeCharacters.map((char) => (
        <MCharacterLayout
          character={char}
          img={characterImages[char]}
          stats={characterStats[char]}
        />
      ))}
    </Grid>
  );
};

export default MMain;
