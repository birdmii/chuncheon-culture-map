import Download from "@components/icons/Download";
import { Box, Typography } from "@mui/material";
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
        <Box
          key={place.id}
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
      ))}
    </Box>
  );
};

export default PlaceList;
