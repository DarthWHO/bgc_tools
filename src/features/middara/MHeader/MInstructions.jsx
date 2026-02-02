import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PortalBackdrop from "../../../ui/PortalBackdrop";

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
        Test
      </PortalBackdrop>
    </>
  );
};
export default MInstructions;
