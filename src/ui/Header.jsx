import { useColorScheme } from "@mui/material";
import { Button } from "@mui/material";

function Header() {
  const { mode, setMode } = useColorScheme();

  const handleThemChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  if (!mode) {
    return null;
  }
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleThemChange}>
        Test Button
      </Button>
    </div>
  );
}

export default Header;
