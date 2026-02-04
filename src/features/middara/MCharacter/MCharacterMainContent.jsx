import { Grid } from "@mui/material";
import MCharacterMainTextBox from "./MCharacterMainTextBox";

const MCharacterMainContent = () => {
  const count = 8;
  const mainComponents = Array.from({ length: count }).map((_, index) => (
    <MCharacterMainTextBox key={index} index={index} />
  ));
  return (
    <Grid container spacing={1} sx={{ height: "100%", padding: 1 }}>
      {mainComponents}
    </Grid>
  );
};

export default MCharacterMainContent;
