import { Backdrop, Box, Portal } from "@mui/material";

const PortalBackdrop = ({
  children,
  open,
  onClose,
  stopPropagation = true,
}) => {
  return (
    <Portal>
      <Backdrop
        sx={(theme) => ({
          position: "fixed",
          inset: 0,
          zIndex: theme.zIndex.drawer + 1,
        })}
        open={open}
        onClick={onClose}
      >
        <Box
          sx={{
            width: "fit-content",
            height: "fit-content",
            maxWidth: "90vw",
            maxHeight: "90vh",
            p: 2,
            bgcolor: "background.paper",
            borderRadius: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "auto",
          }}
          onClick={stopPropagation ? (event) => event.stopPropagation() : null}
        >
          {children}
        </Box>
      </Backdrop>
    </Portal>
  );
};

export default PortalBackdrop;
