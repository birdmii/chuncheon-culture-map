import MapLayout from "@layouts/MapLayout";
import Map from "@components/Map";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const Mid = ({ placeList }) => {
  return (
    <div>
      <Map type={"theme"} placeList={placeList} />
    </div>
  );
};

Mid.getLayout = function getLayout(page) {
  return <MapLayout>{page}</MapLayout>;
};

export async function getStaticPaths() {
  try {
    const themes = await prisma.theme.findMany({
      select: {
        id: true,
      },
    });

    const paths = themes.map((theme) => ({
      params: { mid: theme.id.toString() },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error(error);
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }) {
  try {
    const placeList = await prisma.place.findMany({
      select: {
        theme: true,
        category: true,
        type: true,
        name: true,
        addr: true,
        addrAbbr: true,
        lat: true,
        lng: true,
        placeUrl: true,
        isShutdown: true,
      },
      where: {
        themeId: +params.mid,
      },
    });

    return { props: { placeList } };
  } catch (e) {
    console.error(e);
    return {
      props: { placeList: null },
    };
  }
}

export default Mid;
