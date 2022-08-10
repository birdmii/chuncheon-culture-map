import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { handlePlace } from "@slices/markerSlice";

const PlaceItem = ({ place }) => {
  const itemStyle = {
    borderTop: "1px solid",
    borderTopColor: "primary.main",
    color: "primary.main",
    lineHeight: "28px",
    textDecoration: place.isShutdown ? "line-through" : "none",
    "&:hover": {
      backgroundColor: "primary.main",
      color: "#F9F6ED",
    },
  };

  const dispatch = useDispatch();
  const handleMouseEnter = (e) => {
    dispatch(handlePlace(place));
  };

  const handleMouseLeave = (e) => {
    dispatch(handlePlace(null));
  };

  return (
    <Box
      sx={itemStyle}
      p={2}
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
    >
      <Box>
        <Typography fontSize="18px" fontWeight={700}>
          {place.name}
        </Typography>
        <Typography fontSize="14px">{place.addrAbbr}</Typography>
      </Box>
    </Box>
  );
};

export default PlaceItem;
