import { Grid, Box } from "@mui/material";

import Remi from "../features/middara/assets/images/remi.jpg";
import Nightingale from "../features/middara/assets/images/nightingale.jpg";
import Rook from "../features/middara/assets/images/rook.jpg";
import Zeke from "../features/middara/assets/images/zeke.jpg";

const Middara = () => {
  return (
    <Grid
      container
      direction="row"
      sx={{
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Grid item xs={12} md={6}>
        <Box sx={{ p: 4, maxWidth: "100%", margin: "0 auto" }}>
          <Box
            component="img"
            src={Remi}
            alt="Remi"
            height="25vw"
            sx={{ transform: "scaleX(-1)" }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ p: 4, maxWidth: "100%", margin: "0 auto" }}>
          <Box
            component="img"
            src={Nightingale}
            alt="Nightingale"
            height="25vw"
            sx={{ transform: "scaleX(1)" }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ p: 4, maxWidth: "100%", margin: "0 auto" }}>
          <Box
            component="img"
            src={Rook}
            alt="Rook"
            height="25vw"
            sx={{ transform: "scaleX(-1)" }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ p: 4, maxWidth: "100%", margin: "0 auto" }}>
          <Box
            component="img"
            src={Zeke}
            alt="Zeke"
            height="25vw"
            sx={{ transform: "scaleX(1)" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Middara;
