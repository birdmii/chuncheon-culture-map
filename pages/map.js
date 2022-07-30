import MapLayout from "@layouts/MapLayout";
import Map from "@components/Map";
import ThemeList from "@components/ThemeList";
import { Grid, Box, Typography } from "@mui/material";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const map = ({ themeList }) => {
  return (
    <>
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
          <Box>
            <Box
              p={2}
              sx={{
                borderBottom: "1px solid",
                borderBottomColor: "primary.main",
                textAlign: "center",
              }}
            >
              <Typography fontSize="18px" fontWeight={700} color="primary">
                카테고리
              </Typography>
            </Box>
            <Box
              p="12px"
              sx={{
                display: "flex",
                borderBottom: "1px solid",
                borderBottomColor: "primary.main",
              }}
            >
              <Typography fontSize="16px" color="primary" mr={2}>
                전체 선택
              </Typography>
              <Typography fontSize="16px" color="primary">
                전체 해제
              </Typography>
            </Box>
            <ThemeList placeList={themeList} />
          </Box>
        </Grid>
        <Grid item md={9}>
          <Map type="all" placeList={themeList} />
        </Grid>
      </Grid>
    </>
  );
};

map.getLayout = function getLayout(page) {
  return <MapLayout>{page}</MapLayout>;
};

export async function getStaticProps(ctx) {
  try {
    const themeList = await prisma.theme.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        mapUrl: true,
        category: true,
        place: true,
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
export default map;
