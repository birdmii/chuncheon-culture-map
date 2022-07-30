import { Box, Container, Typography } from "@mui/material";
import ShortDivider from "@icons/ShortDivider";

const MainHeader = ({ latestMapUrl }) => {
  return (
    <Container>
      <Box color="primary" m={2} mt={7}>
        <Typography
          color="primary"
          fontWeight={700}
          fontSize="60px"
          sx={{ whiteSpace: "pre-line", lineHeight: "66px" }}
          mb={4}
        >
          {`춘천의 아름답고 
          사랑스러운 장소들을 
            여기서 만나보세요`}
        </Typography>
        <ShortDivider />
        <Typography
          color="primary"
          fontWeight={400}
          fontSize="16px"
          sx={{ whiteSpace: "pre-line", wordBreak: "keep-all" }}
          my={4}
        >
          {`ChunCheonCultureMap의 지도와 장소들은 춘천시 시정소식지 봄내의 춘천 문화 지도들을 모아두었습니다.
          아래 링크를 통해 이 달의 춘천 문화 지도를 살펴보세요.`}
        </Typography>

        <Typography color="primary" mb={7}>
          <a href={latestMapUrl.mapUrl} target="_blank" rel="noreferrer">
            이 달의 춘천 문화 지도 →
          </a>
        </Typography>
      </Box>
    </Container>
  );
};

export default MainHeader;
