import { Box, Typography } from "@mui/material";
import PlaceItem from "@components/PlaceItem";
import Download from "@icons/Download";
import BackArrow from "@icons/BackArrow";

const PlaceList = ({ theme }) => {
  return (
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
        <Box sx={{ position: "absolute", left: 12, top: 20 }}>
          <BackArrow />
        </Box>
        <Typography fontSize="18px" fontWeight={700} color="primary">
          #{theme.id} {theme.title}
        </Typography>
      </Box>
      <Box>
        <Typography color="primary.main" mx={2}>
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
        <PlaceItem key={place.id} place={place} />
      ))}
    </Box>
  );
};

export default PlaceList;
