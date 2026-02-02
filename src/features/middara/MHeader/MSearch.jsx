import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import TextField from "@mui/material/TextField";
const MSearch = () => {
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        size="small"
        id="outlined-search"
        label="Search statuses"
        type="search"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <TroubleshootIcon />
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
};

export default MSearch;
