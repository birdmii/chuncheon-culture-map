import MainLayout from "@layouts/MainLayout";
import ThemeView from "@components/ThemeView";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default function List({ themeList }) {
  return (
    <>
      <ThemeView themeList={themeList} />
    </>
  );
}

List.getLayout = function getLayout(page) {
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
