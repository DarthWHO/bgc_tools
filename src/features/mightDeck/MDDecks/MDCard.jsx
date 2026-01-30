import { Box, Grid, Typography } from "@mui/material";

const CARDHEIGHT = 70;
const CIRCLESIZE = 64;

const MDCard = ({ colour, deckId }) => {
  if (!colour) return null;
  const displayValue = 1;
  return (
    <Grid size={6}>
      <Box
        display="flex"
        component="section"
        alignItems="center"
        justifyContent="center"
        sx={{
          cursor: "pointer",
          flexGrow: 1,
          p: 2,
          height: CARDHEIGHT,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "black",
          transition: "boxShadow 1s",
          boxShadow: "0px 0px",
          backgroundColor: colour,
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
          <Typography variant="h4" component="h4" color={"rgba(0, 0, 0, .7)"}>
            {displayValue}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default MDCard;
