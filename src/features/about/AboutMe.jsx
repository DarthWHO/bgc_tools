import { Stack, Typography, Link } from "@mui/material";

const AboutMe = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">About Me</Typography>
      <Typography variant="body1">
        Hello! I'm Scott, the developer behind this application. I'm a
        passionate board gamer with a love for creating tools that enhance user
        experiences. This project is a labor of love, and I hope it serves you
        well.
      </Typography>
      <Typography variant="body1">
        I am a software developer by hobby only. If you have any questions or
        feedback, please reach out to me on BoardGameGeek.{" "}
        <Link href="https://boardgamegeek.com/profile/darthwho">darthwho</Link>
      </Typography>
    </Stack>
  );
};

export default AboutMe;
