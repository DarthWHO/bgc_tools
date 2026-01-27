const calculateTotalValue = (decks, isOathsworn) => {
  return decks.reduce((total, deck) => {
    if (deck.isOathsworn === isOathsworn) {
      deck.deck.forEach((card) => {
        if (card.isActive && card.isRedrawn === false) {
          total += card.value;
        }
      });
    }
    return total;
  }, 0);
};

const calculateCrits = (decks, isOathsworn) => {
  return decks.reduce((total, deck) => {
    if (deck.isOathsworn === isOathsworn) {
      deck.deck.forEach((card) => {
        if (card.isActive && card.isCrit) {
          total += 1;
        }
      });
    }
    return total;
  }, 0);
};

const calculateMisses = (decks, isOathsworn) => {
  return decks.reduce((total, deck) => {
    if (deck.isOathsworn === isOathsworn) {
      deck.deck.forEach((card) => {
        if (
          card.isActive &&
          card.isMiss &&
          card.isRedrawn === false &&
          card.isCritMissNegated === false
        ) {
          total += 1;
        }
      });
    }
    return total;
  }, 0);
};

export { calculateTotalValue, calculateCrits, calculateMisses };
