import Link from "next/link";
import { Grid, Box, Typography, Container } from "@mui/material";
import Image from "next/image";
import Logo from "@assets/logo.svg";

const Header = ({ pathname }) => {
  return (
    <Grid
      container
      sx={{
        borderBottom: "1px solid",
        borderColor: "primary.main",
      }}
    >
      <Container sx={{ display: "flex", alignItems: "center", py: 2 }}>
        <Grid item md={10} sm={9} xs={7}>
          <Link href={"/"} forwardRef>
            <Box fontSize={20} fontWeight={300} sx={{ display: "flex" }}>
              <Image src={Logo} />
            </Box>
          </Link>
        </Grid>
        <Grid item md={2} sm={3} xs={5}>
          <Grid
            container
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box
              fontWeight={300}
              sx={{
                textDecoration: pathname === "/about" ? "underline" : "none",
                textUnderlineOffset: "5px",
                textDecorationColor: `#09691E`,
              }}
            >
              <Link href="/about">
                <Typography color="primary">소개</Typography>
              </Link>
            </Box>
            <Box
              fontWeight={300}
              sx={{
                textDecoration: pathname === "/map" ? "underline" : "none",
                textUnderlineOffset: "5px",
                textDecorationColor: `#09691E`,
              }}
            >
              <Link href="/map">
                <Typography color="primary">지도에서 보기</Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Header;
