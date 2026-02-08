import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PortalBackdrop from "../../../ui/PortalBackdrop";
import { Button, Typography } from "@mui/material";

const MSettingsMain = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <SettingsOutlinedIcon onClick={handleOpen} cursor="pointer" />
      <PortalBackdrop open={open} onClose={handleClose}>
        <Typography variant="h6" gutterBottom>
          Settings
        </Typography>
      </PortalBackdrop>
    </>
  );
};
export default MSettingsMain;
