import { Box, Grid, Typography } from "@mui/material";
import { useMightDeckManager } from "../../../hooks/useMightDeckManager";
import { useAppData } from "../../../hooks/useAppData";
import toast from "react-hot-toast";

const CARDHEIGHT = 70;
const CIRCLESIZE = 64;

const MDCard = ({ colour, card }) => {
  const { toggleCardSelection } = useMightDeckManager();
  const { getOathswornActive } = useAppData();

  if (!colour) return null;

  if (colour === "yellow") {
    colour = "#FAD229";
  }

  if (colour === "red") {
    colour = "#F02623";
  }

  if (colour === "black") {
    colour = "#303030";
  }

  const toggleSelected = () => {
    if (!getOathswornActive()) return;
    if (card.isCritAlreadyDrawn) {
      toast.error("Crit already used");
      return;
    }
    if (card.isRedrawn) {
      toast.error("Card already redrawn");
      return;
    }
    toggleCardSelection(card.cardID);
  };

  const displayValue = card.isCrit ? "{ " + card.value + " }" : card.value;

  return (
    <Grid size={6}>
      <Box
        display="flex"
        component="section"
        alignItems="center"
        justifyContent="center"
        onClick={toggleSelected}
        sx={{
          cursor: "pointer",
          flexGrow: 1,
          p: 2,
          height: CARDHEIGHT,
          borderRadius: 2,
          border: card.isSelected ? "3px solid" : "0px",
          borderColor: card.isSelected
            ? colour === "white"
              ? "#303030"
              : "white"
            : "grey",
          transition: "0.3s",
          boxShadow: card.isSelected
            ? "3px 5px rgba(30, 30, 30, 0.3)"
            : "0px 0px",
          bgcolor: colour,
          "&:hover": {
            boxShadow: "3px 5px rgba(30, 30, 30, 0.3)",
            transition: "0.3s",
          },
        }}
      >
        <Box
          display="flex"
          component="section"
          alignItems="center"
          justifyContent="center"
          sx={{
            height: CIRCLESIZE,
            width: CIRCLESIZE,
            borderRadius: 100,
            bgcolor: "white",
            border: "1px solid black",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            color={
              card.isCrit
                ? "rgba(0, 0, 0, 1)"
                : card.isMiss
                  ? "rgba(255, 0, 0, .6)"
                  : "rgba(0, 0, 0, .7)"
            }
          >
            {displayValue}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default MDCard;
