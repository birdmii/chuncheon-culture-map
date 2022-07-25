import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <Typography
      variant="body2"
      color="primary"
      align="center"
      fontWeight={300}
      mb={2}
      mt={8}
    >
      {`© ${new Date().getFullYear()} Studio Lifeguard`}
    </Typography>
  );
};

export default Footer;
