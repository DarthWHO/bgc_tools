import CubeWhite from "../assets/svgs/dice-cube-white.svg?react";
import CubeBlack from "../assets/svgs/dice-cube-black.svg?react";
import ShieldFilled from "../assets/svgs/shield-filled.svg?react";
import Star from "../assets/svgs/burst-star.svg?react";
import Book from "../assets/svgs/book.svg?react";

import Health from "../assets/svgs/heart-health.svg?react";
import Defense from "../assets/svgs/swords-defense.svg?react";
import Movement from "../assets/svgs/foot-movement.svg?react";
import Armor from "../assets/svgs/helmet-armor.svg?react";
import Presence from "../assets/svgs/aura-presence.svg?react";
import Lore from "../assets/svgs/book-lore.svg?react";
import Agility from "../assets/svgs/wing-agility.svg?react";
import Perception from "../assets/svgs/eye-perception.svg?react";
import Strength from "../assets/svgs/fist-strength.svg?react";

const defaultSize = 32;
const fillColourDefault = "#FFFFFF";

const iconImages = {
  CubeWhite,
  CubeBlack,
  ShieldFilled,
  Star,
  Book,
  Perception,
  Strength,
  Health,
  Armor,
  Agility,
  Movement,
  Defense,
  Lore,
  Presence,
};

const IconProvider = ({
  icon,
  fillColour = fillColourDefault,
  width = defaultSize,
  height = defaultSize,
}) => {
  console.log("IconProvider:", { icon, fillColour, width, height });
  const IconComponent = iconImages[icon];
  return <IconComponent fill={fillColour} width={width} height={height} />;
};

export default IconProvider;
