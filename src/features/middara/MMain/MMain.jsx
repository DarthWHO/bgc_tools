import { Grid } from "@mui/material";
import Remi from "../assets/images/remi.webp";
import Nightingale from "../assets/images/nightingale.webp";
import Rook from "../assets/images/rook.webp";
import Zeke from "../assets/images/zeke.webp";
import MCharacterLayout from "../MCharacter/MCharacterLayout";
import MCharacterLayout2 from "../MCharacter/MCharacterLayout2";

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
    <Grid
      container
      direction="row"
      sx={{
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {activeCharacters.map((char) => (
        <Grid key={char} size={{ xs: 12, sm: 12, md: 12, lg: 6 }} p={2}>
          <MCharacterLayout2
            character={char}
            img={characterImages[char]}
            stats={characterStats[char]}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MMain;
