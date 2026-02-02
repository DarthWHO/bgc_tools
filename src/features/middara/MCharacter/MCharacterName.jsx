import { Typography } from "@mui/material";

const MCharacterName = ({ character }) => {
  return (
    <Typography variant="h5" component="div" m={1} ml={2}>
      {character.toUpperCase()}
    </Typography>
  );
};

export default MCharacterName;
