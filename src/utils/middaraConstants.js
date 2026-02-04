export const characterStatInitial = {
  remi: {
    health: 12,
    defense: 7,
    armor: 0,
    movement: 6,
    presence: 3,
    lore: 2,
    agility: 6,
    perception: 3,
    strength: 4,
  },
  nightingale: {
    health: 12,
    defense: 7,
    armor: 0,
    movement: 6,
    presence: 6,
    lore: 3,
    agility: 5,
    perception: 2,
    strength: 2,
  },
  rook: {
    health: 14,
    defense: 7,
    armor: 0,
    movement: 6,
    presence: 4,
    lore: 5,
    agility: 1,
    perception: 2,
    strength: 6,
  },
  zeke: {
    health: 12,
    defense: 7,
    armor: 0,
    movement: 6,
    presence: 2,
    lore: 2,
    agility: 4,
    perception: 6,
    strength: 4,
  },
};

export const diceColours = {
  black: {
    line: "white",
    fill: "#000000",
  },
  white: {
    line: "black",
    fill: "#FFFFFF",
  },
  teal: {
    line: "black",
    fill: "#02B4AA",
  },
  green: {
    line: "black",
    fill: "#8AC53F",
  },
  blue: {
    line: "black",
    fill: "#1359A9",
  },
  fire: {
    line: "black",
    fill: "#F6A61F",
  },
  yellow: {
    line: "black",
    fill: "#ECEB6C",
  },
  pink: {
    line: "black",
    fill: "#F17797",
  },
  purple: {
    line: "white",
    fill: "#5F4FA0",
  },
  orange: {
    line: "white",
    fill: "#E95F25",
  },
  red: {
    line: "white",
    fill: "#992949",
  },
  grey: {
    line: "white",
    fill: "#52636D",
  },
  sky: {
    line: "white",
    fill: "#27B6E6",
  },
  brown: {
    line: "white",
    fill: "#6A351F",
  },
  hunter: {
    line: "white",
    fill: "#007A4D",
  },
};

export const statColours = (stat) => {
  let bgColour;
  let fillColour;
  switch (stat) {
    case "Presence":
      bgColour = "#964698";
      fillColour = "#FFFFFF";
      break;
    case "Lore":
      bgColour = "#18AEE5";
      fillColour = "#FFFFFF";
      break;
    case "Agility":
      bgColour = "#8DC644";
      fillColour = "#FFFFFF";
      break;
    case "Perception":
      bgColour = "#F99C26";
      fillColour = "#FFFFFF";
      break;
    case "Strength":
      bgColour = "#D12828";
      fillColour = "#FFFFFF";
      break;
    default:
      bgColour = "#E54A2E";
      fillColour = "#FED8A1";
  }

  return { bgColour, fillColour };
};
