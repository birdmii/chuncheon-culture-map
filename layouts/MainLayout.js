import Nav from "@components/Nav";
import Footer from "@components/Footer";
import { Box, Container } from "@mui/material";
import { useRouter } from "next/router";

const MainLayout = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <>
      <Container>
        <Box sx={{ minHeight: "100vh" }}>
          <Nav pathname={asPath} />
          <Box py={10}>{children}</Box>
        </Box>
        <Box>
          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default MainLayout;
