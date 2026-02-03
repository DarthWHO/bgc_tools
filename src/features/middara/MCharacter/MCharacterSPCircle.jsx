import { Box, Button } from "@mui/material";
import { useState } from "react";

const onColourStart = "#D55D66";
const onColourEnd = "#973044";
const offColourStart = "#6D6F71";
const offColourEnd = "#6D6F71";

const buttonSize = 36;

const MCharacterSPCircle = () => {
  const [isOn, setIsOn] = useState(true);

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setIsOn(!isOn)}
        sx={{
          background: `radial-gradient(circle, ${isOn ? onColourStart : offColourStart}, ${isOn ? onColourEnd : offColourEnd})`,
          width: buttonSize,
          height: buttonSize,
          minWidth: 0,
          borderRadius: "50%",
        }}
      ></Button>
    </>
  );
};

export default MCharacterSPCircle;
