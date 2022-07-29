import MapLayout from "@layouts/MapLayout";
import PlaceList from "@components/PlaceList";
import Map from "@components/Map";
import { Grid, Box, Typography, List, ListItem } from "@mui/material";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const Mid = ({ placeList }) => {
  return (
    <div>
      <Grid container>
        <Grid
          item
          md={3}
          sx={{
            overflowY: "scroll",
            height: "calc(100vh - 73px)",
            borderRight: "1px solid",
            borderRightColor: "primary.main",
          }}
        >
          <PlaceList theme={placeList} />
        </Grid>
        <Grid item md={9}>
          <Map type={"theme"} placeList={placeList.place} />
        </Grid>
      </Grid>
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
    const placeList = await prisma.theme.findUnique({
      select: {
        id: true,
        title: true,
        content: true,
        mapUrl: true,
        category: true,
        place: true,
      },
      where: {
        id: +params.mid,
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
