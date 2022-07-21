import MainLayout from "@layouts/MainLayout";
import Link from "next/link";
import { Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Typography
        fontSize={22}
        color="primary"
        mt={5}
        sx={{ cursor: "default", whiteSpace: "pre-line" }}
      >
        {`춘천 문화 지도는 춘천시 시정소식지 봄내에서 2021년 1월호부터 매월 특정한 주제로 춘천의 이곳저곳을 소개하는 지도입니다.
        낭만이 넘치는 문화 도시 춘천을 문화 지도와 함께 색다르게 즐겨보면 어떨까요?
        카카오 지도를 통해 편리하게 보실 수도 있지만 귀여운 일러스트와 함께 그려진 지도를 직접 다운로드하실 수도 있답니다.
        `}
      </Typography>

      <Typography
        fontSize={16}
        color="primary"
        mt={4}
        sx={{ cursor: "default", whiteSpace: "pre-line" }}
      >
        {`이 사이트는 춘천에 사는 디자이너와 개발자가 만들었습니다. 
        춘천 문화 지도에서 멋진 곳, 재밌는 곳들을 많이 소개하고 있어서 춘천 시민 분들, 여행오신 분들이 더 편하게 지도를 볼 수 있길 바라는 마음으로 또 춘천을 구석구석 즐겨보시길 바라는 마음으로 제작하였습니다.
        춘천시 시정소식지 봄내에 실리는 춘천 문화 지도의 데이터만 사용하고 있으며 저작권보호정책에 따라 비영리 목적으로 제공됩니다.
        제안하고 싶은 점이나 오류는 아래의 양식을 통해 알려주세요.`}
      </Typography>
      <Typography color="primary" mt={3}>
        <Link
          href="https://forms.gle/BJx4Jbuc6YgfNP1V8"
          passHref={true}
          target="_blank"
        >
          더 나은 ChunCheonCultureMap을 위해서 제안하기 →
        </Link>
      </Typography>
    </>
  );
};

About.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default About;
