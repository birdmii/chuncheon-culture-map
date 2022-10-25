import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { handlePlace, getMarker } from "@slices/markerSlice";
import { useEffect, useRef, useState } from "react";

const PlaceItem = ({ place, category, isHovered }) => {
  const itemRef = useRef();
  const hoveredPlace = useSelector(getMarker);
  const [categoryName, setCategoryName] = useState(null);
  const uiTheme = useTheme();
  const matches = useMediaQuery(uiTheme.breakpoints.up("md"));

  useEffect(() => {
    if (place.categoryId) {
      const categoryName = category.filter((v) => v.id === place.categoryId)[0]
        .name;
      setCategoryName(categoryName);
    }
  }, []);

  useEffect(() => {
    if (hoveredPlace !== null) {
      if (hoveredPlace.id === place.id) {
        itemRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hoveredPlace, place.id]);

  const itemStyle = matches
    ? {
        borderTop: "1px solid",
        borderTopColor: "primary.main",
        color: "primary.main",
        lineHeight: "28px",
        zIndex: "9999",
        "&:hover": {
          backgroundColor: "primary.main",
          color: "#F9F6ED",
        },
      }
    : {
        border: "1px solid",
        borderColor: "primary.main",
        margin: "10px",
        color: "primary.main",
        lineHeight: "28px",
        zIndex: "9999",
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {categoryName && (
            <Typography
              component="span"
              fontSize={13}
              color={"#F9F6ED"}
              sx={{
                padding: "2px 4px",
                marginRight: "4px",
                display: "inline-block",
              }}
            >
              {categoryName}
            </Typography>
          )}
          <Typography component="span" fontSize="14px" color={"#F9F6ED"}>
            {place.addrAbbr}
          </Typography>
        </Box>
      </Box>
    </Box>
  ) : (
    <Box
      ref={itemRef}
      sx={itemStyle}
      backgroundColor={"background.default"}
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {categoryName && (
            <Typography
              component="span"
              fontSize={13}
              backgroundColor={"primary.main"}
              color={"#F9F6ED"}
              sx={{
                padding: "2px 4px",
                marginRight: "4px",
                display: "inline-block",
              }}
            >
              {categoryName}
            </Typography>
          )}
          <Typography component="span" fontSize="14px">
            {place.addrAbbr}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PlaceItem;
