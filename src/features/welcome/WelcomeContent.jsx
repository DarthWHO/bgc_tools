import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import WelcomeContentCard from "./WelcomeContentCard";

const cardData = [
  {
    image: "oathswornlogo.webp",
    title: "Oathsworn Might Deck",
    description:
      "For those that enjoy using the Oathsworn cards, the digital version of the Might Deck is available here.",
    navigateTo: "/oathsworn",
  },
  {
    image: "middara.jpg",
    title: "Middara Character Tracker",
    description:
      "Running out of table space? Use this digital version to track your 4 characters and their abilities.",
    navigateTo: "/middara",
  },
];

const WelcomeContent = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      spacing={10}
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "80vh" }}
    >
      <Grid xs={12} sm={6} md={4} lg={3}>
        <WelcomeContentCard
          image={cardData[0].image}
          title={cardData[0].title}
          description={cardData[0].description}
          onClick={() => navigate(cardData[0].navigateTo)}
        />
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={3}>
        <WelcomeContentCard
          image={cardData[1].image}
          title={cardData[1].title}
          description={cardData[1].description}
          onClick={() => navigate(cardData[1].navigateTo)}
        />
      </Grid>
    </Grid>
  );
};

export default WelcomeContent;
