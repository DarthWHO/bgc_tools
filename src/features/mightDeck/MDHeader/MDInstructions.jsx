import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MDInstructionsList from "./MDInstructionsList";
import PortalBackdrop from "../../../ui/PortalBackdrop";

const MDInstructions = ({ open, setOpen }) => {
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
        <MDInstructionsList />
      </PortalBackdrop>
    </>
  );
};
export default MDInstructions;
