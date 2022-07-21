import Nav from "@components/Nav";
import Footer from "@components/Footer";
import { Box, Container, CssBaseline } from "@mui/material";
import { useRouter } from "next/router";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#F9F6ED",
    },
    primary: {
      main: "#09691E",
    },
  },
});

const MainLayout = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ minHeight: "100vh" }}>
          <Nav pathname={asPath} />
          <Container>
            <Box py={10}>{children}</Box>
          </Container>
        </Box>
        <Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default MainLayout;
