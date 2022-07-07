import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      fontWeight={300}
      sx={{ m: 2 }}
    >
      {`© ${new Date().getFullYear()} Birdmee`}
    </Typography>
  );
};

export default Footer;
