import { Button, Grid, Typography } from "@mui/material";
import { useAppData } from "../../../hooks/useAppData";
import { useMightDeckManager } from "../../../hooks/useMightDeckManager";

const MDResetContent = ({ onClose }) => {
  const { resetAppDataToInitial } = useAppData();
  const { resetMightDeckDataToInitial } = useMightDeckManager();

  const handleReset = () => {
    resetAppDataToInitial();
    resetMightDeckDataToInitial();
    onClose();
  };

  return (
    <div>
      <Typography variant="h7" gutterBottom>
        Clicking on Reset will reset all data to initial values. Intention is to
        click on this when starting a new encounter. Are you sure?
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ marginTop: 2, justifyContent: "flex-end" }}
      >
        <Button variant="contained" onClick={handleReset}>
          Reset
        </Button>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
      </Grid>
    </div>
  );
};

export default MDResetContent;
