import { Button, Box, Stack } from "@mui/material";

const MDDeckButtons = ({ colour, deckId }) => {
  return (
    <Stack
      direction="column"
      spacing={1}
      sx={{
        justifyContent: "flex-end",
        alignItems: "center",
        m: 0,
        p: 0,
        pb: 1,
      }}
    >
      <Stack spacing={1}>
        <Button variant="outlined" sx={{ width: "160px", m: 0 }}>
          Shuffle
        </Button>
        <Button variant="outlined" sx={{ width: "160px", m: 0 }}>
          Re-Draw
        </Button>
        <Button
          variant="outlined"
          disabled={true}
          sx={{ width: "160px", m: 0 }}
        >
          Crits
        </Button>
      </Stack>
      <Button variant="contained" sx={{ width: "160px", m: 0 }}>
        {`Draw XX ${colour}`}
      </Button>
    </Stack>
  );
};

export default MDDeckButtons;
