import Link from "next/link";
import { Box, Grid, Typography } from "@mui/material";

const ThemeView = ({ themeList }) => {
  const bgWhiteitemStyle = {
    color: "primary.main",
    lineHeight: "28px",
    "&:hover": {
      backgroundColor: "primary.main",
      color: "#F9F6ED",
    },
  };

  const bgGreenitemStyle = {
    color: "#F9F6ED",
    lineHeight: "28px",
    "&:hover": {
      backgroundColor: "#F9F6ED",
      color: "primary.main",
    },
  };

  return (
    <>
      <Grid container>
        {themeList.map((theme, index) => (
          <Link href="/map/[mid]" as={`/map/${theme.id}`}>
            <Grid
              key={index}
              item
              xs={12}
              md={4}
              lg={3}
              fontSize={32}
              sx={{
                height: "300px",
                borderBottom: "1px solid",
                borderRight: "1px solid",
                borderLeft: 0,
                borderBottomColor: "primary.main",
                backgroundColor: "#F9F6ED",
                color: "primary.main",
                padding: "24px",
                boxSizing: "border-box",
                "&:hover": {
                  textDecoration: "underline",
                  textUnderlineOffset: "5px",
                },
              }}
            >
              {index % 4 === 1 && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <>
                    <Box
                      fontSize={36}
                      sx={{
                        textAlign: "right",
                        fontWeight: "700",
                      }}
                    >
                      #{theme.id}
                    </Box>
                    <Typography
                      fontSize={32}
                      sx={{ fontWeight: "700", wordBreak: "keep-all" }}
                    >
                      {theme.title}
                    </Typography>
                  </>
                </Box>
              )}

              {index % 4 === 0 && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    height: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <>
                    <Typography
                      fontSize={36}
                      sx={{ textAlign: "right", fontWeight: "700" }}
                    >
                      #{theme.id}
                    </Typography>
                    <Typography
                      fontSize={32}
                      sx={{ fontWeight: "700", wordBreak: "keep-all" }}
                    >
                      {theme.title}
                    </Typography>
                  </>
                </Box>
              )}

              {index % 4 === 2 && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    height: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <>
                    <Typography fontSize={36} sx={{ fontWeight: "700" }}>
                      #{theme.id}
                    </Typography>
                    <Typography
                      fontSize={32}
                      sx={{
                        textAlign: "right",
                        fontWeight: "700",
                        wordBreak: "keep-all",
                      }}
                    >
                      {theme.title}
                    </Typography>
                  </>
                </Box>
              )}

              {index % 4 === 3 && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <>
                    <Typography fontSize={36} sx={{ fontWeight: "700" }}>
                      #{theme.id}
                    </Typography>
                    <Typography
                      fontSize={32}
                      sx={{
                        textAlign: "right",
                        fontWeight: "700",
                        wordBreak: "keep-all",
                      }}
                    >
                      {theme.title}
                    </Typography>
                  </>
                </Box>
              )}
            </Grid>
          </Link>
        ))}
      </Grid>
    </>
  );
};

export default ThemeView;
