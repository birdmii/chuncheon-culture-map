import MainLayout from "@layouts/MainLayout";
import { Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Typography
        fontSize={22}
        fontWeight={300}
        mt={4}
        sx={{ cursor: "default", whiteSpace: "pre-line" }}
      >
        {`춘천 문화 지도는 춘천시 시정소식지 봄내에서 2021년 1월호부터 매달 특정한 주제로 춘천의 이곳저곳을 소개하는 지도입니다.
        낭만이 넘치는 문화 도시 춘천을 문화 지도와 함께 색다르게 즐겨보면 어떨까요?
        `}
      </Typography>

      <Typography
        fontSize={16}
        fontWeight={300}
        mt={4}
        sx={{ cursor: "default", whiteSpace: "pre-line" }}
      >
        {`이 사이트는 춘천에 사는 개발자가 만들었습니다. 
        춘천 문화 지도에서 멋진 곳, 재밌는 곳들을 많이 소개하고 있어서 춘천 시민 분들, 여행오신 분들이 더 편하게 지도를 볼 수 있길 바라는 마음으로 제작하였습니다.
        춘천시 시정소식지 봄내에 실리는 춘천 문화 지도의 데이터만 사용하고 있으며 저작권보호정책에 따라 비영리 목적으로 제공됩니다. `}
      </Typography>
    </>
  );
};

About.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default About;
