export const DECK_COLOURS = ["white", "yellow", "red", "black"];

export const getDeckId = (colour, isOathsworn = true) => {
  const prefix = isOathsworn ? "o" : "e";
  return `${prefix}${colour}`;
};

export const getAllDeckIds = (isOathsworn = true) => {
  return DECK_COLOURS.map((colour) => getDeckId(colour, isOathsworn));
};
