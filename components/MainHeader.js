import { Box, Container, Typography } from "@mui/material";
import ShortDivider from "@icons/ShortDivider";
import Link from "next/link";

const MainHeader = () => {
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
          {`ChunCheonCultureMap의 지도와 장소들은 봄내 소식지의 자료들을 참고하였습니다.
          아래 링크를 통해 봄내 소식지도 둘러보세요.`}
        </Typography>

        <Typography color="primary" mb={7}>
          <Link
            href="https://bomnae.chuncheon.go.kr/"
            passHref={true}
            target="_blank"
          >
            봄내 소식지 →
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default MainHeader;
