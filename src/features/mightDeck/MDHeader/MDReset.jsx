import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import PortalBackdrop from "../../../ui/PortalBackdrop";
import MDResetContent from "./MDResetContent";

const MDReset = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <RestartAltOutlinedIcon onClick={handleOpen} cursor="pointer" />
      <PortalBackdrop open={open} onClose={handleClose}>
        <MDResetContent onClose={handleClose} />
      </PortalBackdrop>
    </>
  );
};
export default MDReset;
