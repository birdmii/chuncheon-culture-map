import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { handlePlace } from "@slices/markerSlice";

const PlaceItem = ({ place }) => {
  const dispatch = useDispatch();
  const handleMouseEnter = (e) => {
    dispatch(handlePlace(place));
  };

  const handleMouseLeave = (e) => {
    dispatch(handlePlace(null));
  };

  return (
    <Box
      sx={{
        borderTop: "1px solid",
        borderTopColor: "primary.main",
      }}
      p={2}
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
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
