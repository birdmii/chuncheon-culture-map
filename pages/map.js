import Map from "@components/Map";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const map = ({ placeList }) => {
  return (
    <>
      <Map placeList={placeList} />
    </>
  );
};

export async function getStaticProps(ctx) {
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
    });

    return { props: { placeList } };
  } catch (e) {
    console.error(e);
    return {
      props: { placeList: null },
    };
  }
}
export default map;
