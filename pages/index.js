import MainLayout from "@layouts/MainLayout";
import MainHeader from "@components/MainHeader";
import MainContent from "@components/MainContent";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default function Home({ themeList }) {
  return (
    <>
      <MainHeader latestMapUrl={themeList[themeList.length - 1]} />
      <MainContent themeList={themeList} />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps(ctx) {
  try {
    const themeList = await prisma.theme.findMany({
      select: {
        id: true,
        title: true,
        uploadedAt: true,
        mapUrl: true,
      },
      orderBy: {
        id: "asc",
      },
    });

    return { props: { themeList } };
  } catch (e) {
    console.error(e);
    return {
      props: { themeList: null },
    };
  }
}
