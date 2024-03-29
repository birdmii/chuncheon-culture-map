import Image from "next/image";
import Link from "next/link";
import { Grid, Box, Typography } from "@mui/material";
import Logo from "@assets/logo.svg";

const Header = ({ pathname }) => {
  return (
    <Grid
      container
      sx={{
        borderBottom: "1px solid",
        borderColor: "primary.main",
        p: 2,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid item md={10} sm={9} xs={7}>
        <Link href={"/"} forwardRef>
          <Box
            fontSize={20}
            fontWeight={300}
            sx={{ display: "flex" }}
          >
            <Image
              id="logo_img"
              src={Logo}
              alt="Logo image of Chuncheon Culture Map"
              priority
            />
          </Box>
        </Link>
      </Grid>
      <Grid item md={2} sm={3} xs={5}>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-around" }}
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
              <Typography color="primary" sx={{ cursor: "pointer" }}>
                소개
              </Typography>
            </Link>
          </Box>
          <Box
            fontWeight={300}
            sx={{
              textDecoration: pathname === "/list" ? "underline" : "none",
              textUnderlineOffset: "5px",
              textDecorationColor: `#09691E`,
            }}
          >
            <Link href="/list">
              <Typography color="primary" sx={{ cursor: "pointer" }}>
                전체목록보기
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
