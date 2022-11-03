import Link from "next/link";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

const ThemeView = ({ themeList }) => {
  const uiTheme = useTheme();
  const matches = useMediaQuery(uiTheme.breakpoints.up("md"));

  return (
    <>
      <Grid container>
        {themeList.map((theme, index) => (
          <Link href="/map/[mid]" as={`/map/${theme.id}`} key={index}>
            <Grid
              item
              xs={12}
              md={4}
              lg={3}
              fontSize={32}
              sx={{
                height: "300px",
                borderBottom: "1px solid",
                borderRight: matches ? "1px solid" : "none",
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
                  <Typography
                    fontSize={36}
                    sx={{
                      textAlign: "right",
                      fontWeight: "700",
                      cursor: "pointer",
                    }}
                  >
                    #{theme.id}
                  </Typography>
                  <Typography
                    fontSize={32}
                    sx={{
                      fontWeight: "700",
                      wordBreak: "keep-all",
                      cursor: "pointer",
                      cursor: "pointer",
                    }}
                  >
                    {theme.title}
                  </Typography>
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
                  <Typography
                    fontSize={36}
                    sx={{
                      textAlign: "right",
                      fontWeight: "700",
                      cursor: "pointer",
                    }}
                  >
                    #{theme.id}
                  </Typography>
                  <Typography
                    fontSize={32}
                    sx={{
                      fontWeight: "700",
                      wordBreak: "keep-all",
                      cursor: "pointer",
                    }}
                  >
                    {theme.title}
                  </Typography>
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
                  <Typography
                    fontSize={36}
                    sx={{ fontWeight: "700", cursor: "pointer" }}
                  >
                    #{theme.id}
                  </Typography>
                  <Typography
                    fontSize={32}
                    sx={{
                      textAlign: "right",
                      fontWeight: "700",
                      wordBreak: "keep-all",
                      cursor: "pointer",
                    }}
                  >
                    {theme.title}
                  </Typography>
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
                  <Typography
                    fontSize={36}
                    sx={{ fontWeight: "700", cursor: "pointer" }}
                  >
                    #{theme.id}
                  </Typography>
                  <Typography
                    fontSize={32}
                    sx={{
                      textAlign: "right",
                      fontWeight: "700",
                      wordBreak: "keep-all",
                      cursor: "pointer",
                    }}
                  >
                    {theme.title}
                  </Typography>
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
