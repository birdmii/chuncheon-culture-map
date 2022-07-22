import MainLayout from "@layouts/MainLayout";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { PrismaClient } from "@prisma/client";
import RightTopArrow from "@icons/RightTopArrow";
import ShortDivider from "@icons/ShortDivider";
import Link from "next/link";

const prisma = new PrismaClient();

export default function Home({ themeList }) {
  return (
    <>
      <Box color="primary" m={2}>
        <Typography
          color="primary"
          fontWeight={700}
          fontSize="30px"
          sx={{ whiteSpace: "pre-line", lineHeight: "36px" }}
          mb={4}
        >
          {`춘천의 아름답고 
          사랑스러운 장소들을 
            여기서 만나보세요`}
        </Typography>
        <ShortDivider />
        <Typography
          color="primary"
          fontWeight={400}
          fontSize="16px"
          sx={{ whiteSpace: "pre-line", wordBreak: "keep-all" }}
          my={4}
        >
          {`ChunCheonCultureMap의 지도와 장소들은 봄내 소식지의 자료들을 참고하였습니다.
          아래 링크를 통해 봄내 소식지도 둘러보세요.`}
        </Typography>

        <Typography color="primary" mb={7}>
          <Link
            href="https://bomnae.chuncheon.go.kr/"
            passHref={true}
            target="_blank"
          >
            봄내 소식지 →
          </Link>
        </Typography>
      </Box>

      <List>
        <Divider color="primary" />
        {themeList.map((theme) => (
          <Box key={theme.id}>
            <ListItem sx={{ marginTop: 2, marginBottom: 2, display: "block" }}>
              <Link href="/map/[mid]" as={`/map/${theme.id}`}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                  mb={4}
                >
                  <>
                    <ListItemText
                      primary={
                        <>
                          <Typography
                            color="primary"
                            fontSize={20}
                            fontWeight={700}
                          >
                            #{theme.id}
                          </Typography>
                          <Typography
                            color="primary"
                            fontSize={20}
                            fontWeight={700}
                          >
                            {theme.title}
                          </Typography>
                        </>
                      }
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: 32,
                        whiteSpace: "pre-line",
                      }}
                    />
                    <RightTopArrow />
                  </>
                </Box>
              </Link>
              <Typography color="primary" fontSize={16}>
                {theme.uploadedAt}
              </Typography>
            </ListItem>
            <Divider color="primary" />
          </Box>
        ))}
      </List>
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
