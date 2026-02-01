import ShieldFilled from "../assets/svgs/shield-filled.svg?react";

const defaultSize = 48;

const ShieldIcon = ({
  fillColour = "#eeeeee",
  width = defaultSize,
  height = defaultSize,
}) => {
  return <ShieldFilled fill={fillColour} width={width} height={height} />;
};

export default ShieldIcon;
