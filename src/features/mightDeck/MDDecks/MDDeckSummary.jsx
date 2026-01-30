import { Box, Typography } from "@mui/material";
import { useMightDeckManager } from "../../../hooks/useMightDeckManager";

const MDDeckSummary = ({ deckId }) => {
  const { remaining, remainingByType } =
    useMightDeckManager().getDeckStats(deckId);

  return (
    <Box sx={{ height: "100%", textAlign: "center" }}>
      <Typography variant="body1" align="right">
        {remaining === 0
          ? "Deck empty!"
          : remainingByType.map((typeInfo) => (
              <span key={`=${typeInfo.description}${typeInfo.value}`}>
                {`${typeInfo.description.charAt(0).toUpperCase() + typeInfo.description.slice(1)} 
                (${typeInfo.value}): ${typeInfo.count} - ${((typeInfo.count / remaining) * 100).toFixed(0)}%`}
                <br />
              </span>
            ))}
      </Typography>
    </Box>
  );
};

export default MDDeckSummary;
