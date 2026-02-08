import {
  Grid,
  Typography,
  Stack,
  Icon,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import PortalBackdrop from "../../../ui/PortalBackdrop";

const MCharacterMainContent = ({ isOpen, setOpen, character }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Actions (5)
      </Button>
      <Typography variant="caption" textAlign="center">
        Start Turn (0) / Move (2) / Conviction (0) / Spell (2) / Attacked (0) /
        Attack (1) / Hit (0) / Other (0)
      </Typography>
      <PortalBackdrop
        open={isOpen}
        onClose={handleClose}
        stopPropagation={true}
      >
        <Stack>
          <Typography variant="h5" gutterBottom>
            {character.toUpperCase()} details
          </Typography>
          <Typography variant="h6" gutterBottom>
            Move
          </Typography>
          <Typography variant="body1" gutterBottom>
            {`- Exhaust 1 SP: Move up to 2 spaces. If you have no SP, move 1 space and gain 1 SP.`}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {`- Exhaust 2 SP: Move up to 4 spaces. If you have no SP, move 2 spaces and gain 2 SP.`}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Attack
          </Typography>
          <Typography variant="body1" gutterBottom>
            {`- Exhaust 1 SP: Move up to 2 spaces. If you have no SP, move 1 space and gain 1 SP.`}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {`- Exhaust 2 SP: Move up to 4 spaces. If you have no SP, move 2 spaces and gain 2 SP.`}
          </Typography>
        </Stack>
      </PortalBackdrop>
    </>
  );
};

export default MCharacterMainContent;
