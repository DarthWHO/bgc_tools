import CubeWhite from "../assets/svgs/dice-cube-white.svg?react";
import CubeBlack from "../assets/svgs/dice-cube-black.svg?react";

const defaultSize = 48;

const MiddaraDieIcon = ({
  lineColour = "white",
  fillColour = "#000000",
  width = defaultSize,
  height = defaultSize,
}) => {
  if (lineColour === "white") {
    return <CubeWhite fill={fillColour} width={width} height={height} />;
  }
  return <CubeBlack fill={fillColour} width={width} height={height} />;
};

export default MiddaraDieIcon;
