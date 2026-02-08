import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PortalBackdrop from "../../../ui/PortalBackdrop";
import { Typography } from "@mui/material";

const MInstructions = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <HelpOutlineOutlinedIcon onClick={handleOpen} cursor="pointer" />
      <PortalBackdrop open={open} onClose={handleClose} stopPropagation={false}>
        <Typography variant="h6" gutterBottom>
          Instructions
        </Typography>
      </PortalBackdrop>
    </>
  );
};
export default MInstructions;
