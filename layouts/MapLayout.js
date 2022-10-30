import { useRouter } from "next/router";
import Nav from "@components/Nav";
import { Box, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Meta from "@components/Meta";

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

const MapLayout = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <>
      <Meta />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ height: "100vh" }}>
          <Nav pathname={asPath} />
          {children}
        </Box>
      </ThemeProvider>
    </>
  );
};

export default MapLayout;
