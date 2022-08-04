import { Box, Typography } from "@mui/material";

const PlaceItem = ({ place }) => {
  return (
    <Box
      sx={{
        borderTop: "1px solid",
        borderTopColor: "primary.main",
      }}
      p={2}
    >
      <Box>
        <Typography
          color="primary"
          fontSize="18px"
          fontWeight={700}
          sx={{
            lineHeight: "28px",
            textDecoration: place.isShutdown ? "line-through" : "none",
            textDecorationThickness: "2px",
          }}
        >
          {place.name}
        </Typography>
        <Typography color="primary" fontSize="14px">
          {place.addrAbbr}
        </Typography>
      </Box>
    </Box>
  );
};

export default PlaceItem;
