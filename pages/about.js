import MainLayout from "@layouts/MainLayout";

const About = () => {
  return <>About</>;
};

About.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default About;
