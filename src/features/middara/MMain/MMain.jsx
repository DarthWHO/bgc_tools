import { Grid } from "@mui/material";
import Remi from "../assets/images/remi.jpg";
import Nightingale from "../assets/images/nightingale.jpg";
import Rook from "../assets/images/rook.jpg";
import Zeke from "../assets/images/zeke.jpg";
import MCharacterMain from "../MCharacter/MCharacterMain";

const activeCharacters = ["remi", "nightingale", "rook", "zeke"];

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
      {activeCharacters.map((char, index) => (
        <Grid key={char}>
          <MCharacterMain
            character={char}
            img={characterImages[char]}
            index={index + 1}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MMain;
