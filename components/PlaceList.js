import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import PlaceItem from "@components/PlaceItem";
import Download from "@icons/Download";
import { useSelector } from "react-redux";
import { getPlace } from "@slices/markerSlice";

const PlaceList = ({ theme }) => {
  const uiTheme = useTheme();
  const matches = useMediaQuery(uiTheme.breakpoints.up("md"));

  const hoveredPlace = useSelector(getPlace);

  return matches ? (
    <Box>
      <Box
        p={2}
        sx={{
          position: "relative",
          textAlign: "center",
          borderBottom: "1px solid",
          borderBottomColor: "primary.main",
        }}
      >
        <Typography fontSize="18px" fontWeight={700} color="primary">
          #{theme.id} {theme.title}
        </Typography>
      </Box>
      <Box>
        <Typography color="primary.main" mx={2} my={4}>
          {theme.content}
        </Typography>
        <a href={theme.mapUrl} target="_blank" rel="noreferrer">
          <Box
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              backgroundColor: "primary.main",
            }}
            m={2}
            py={1}
          >
            <Download />{" "}
            <Typography color="#F9F6ED" ml={1}>
              지도 다운로드
            </Typography>
          </Box>
        </a>
      </Box>
      {theme.place.map((place) => (
        <PlaceItem
          key={place.id}
          place={place}
          category={theme.category}
          isHovered={hoveredPlace && place.id === hoveredPlace.id}
        />
      ))}
    </Box>
  ) : (
    <Box
      sx={{
        position: "absolute",
        bottom: "15px",
        right: "10px",
        left: "10px",
        display: "grid",
        gridAutoFlow: "column",
        gridAutoColumns: "minmax(95vw,1fr)",
        gridGap: "8px",
        overflowX: "scroll",
      }}
    >
      <Box
        sx={{
          border: "1px solid",
          borderColor: "primary.main",
          backgroundColor: "background.default",
          zIndex: "9999",
        }}
      >
        <Box>
          <Typography
            fontSize="16px"
            m={2}
            fontWeight={700}
            color="primary.main"
          >
            #{theme.id} {theme.title}
          </Typography>
          <Typography color="primary.main" m={2} fontSize="14px">
            {theme.content}
          </Typography>
          <a href={theme.mapUrl} target="_blank" rel="noreferrer">
            <Box
              sx={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                backgroundColor: "primary.main",
              }}
              m={2}
              py={1}
            >
              <Download />{" "}
              <Typography color="#F9F6ED" ml={1}>
                지도 다운로드
              </Typography>
            </Box>
          </a>
        </Box>
      </Box>
      {theme.place.map((place) => (
        <PlaceItem
          key={place.id}
          place={place}
          category={theme.category}
          isHovered={hoveredPlace && place.id === hoveredPlace.id}
        />
      ))}
    </Box>
  );
};

export default PlaceList;
