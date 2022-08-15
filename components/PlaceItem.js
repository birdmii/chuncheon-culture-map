import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { handlePlace, getMarker } from "@slices/markerSlice";
import { useEffect, useRef } from "react";

const PlaceItem = ({ place, isHovered }) => {
  const itemRef = useRef();
  const hoveredPlace = useSelector(getMarker);

  useEffect(() => {
    if (hoveredPlace !== null) {
      if (hoveredPlace.id === place.id) {
        itemRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hoveredPlace]);

  const itemStyle = {
    borderTop: "1px solid",
    borderTopColor: "primary.main",
    color: "primary.main",
    lineHeight: "28px",
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

  return isHovered ? (
    <Box
      ref={itemRef}
      sx={itemStyle}
      backgroundColor={"primary.main"}
      color={"#F9F6ED"}
      p={2}
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
    >
      <Box>
        <Typography
          fontSize="18px"
          fontWeight={700}
          color={"#F9F6ED"}
          sx={{ textDecoration: place.isShutdown ? "line-through" : "none" }}
        >
          {place.name}
        </Typography>
        <Typography fontSize="14px" color={"#F9F6ED"}>
          {place.addrAbbr}
        </Typography>
      </Box>
    </Box>
  ) : (
    <Box
      ref={itemRef}
      sx={itemStyle}
      p={2}
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
    >
      <Box>
        <Typography
          fontSize="18px"
          fontWeight={700}
          sx={{ textDecoration: place.isShutdown ? "line-through" : "none" }}
        >
          {place.name}
        </Typography>
        <Typography fontSize="14px">{place.addrAbbr}</Typography>
      </Box>
    </Box>
  );
};

export default PlaceItem;
