import MainLayout from "@layouts/MainLayout";

export default function Home() {
  return <>Home</>;
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
