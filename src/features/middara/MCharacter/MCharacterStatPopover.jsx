import { Typography, Box } from "@mui/material";
import NumberSpinner from "../../../ui/NumberSpinner";

const MCharacterStatPopover = ({ stat }) => {
  return (
    <Box
      sx={{
        p: 1,
        display: "flex",
        flexDirection: "column",
        m: "auto",
        gap: 1,
      }}
    >
      <Typography
        mb={0}
        pb={0}
        textAlign="center"
      >{`Modify ${stat}`}</Typography>
      <NumberSpinner
        min={0}
        max={5}
        value={0}
        size="small"
        marginTop={-1}
        onValueChange={() => {}}
      />
    </Box>
  );
};

export default MCharacterStatPopover;
