import Star from "../assets/svgs/burst-star.svg?react";

const defaultSize = 48;

const StarIcon = ({
  fillColour = "#FFFFFF",
  width = defaultSize,
  height = defaultSize,
}) => {
  return <Star fill={fillColour} width={width} height={height} />;
};

export default StarIcon;
