import Link from "next/link";
import { Grid, Box } from "@mui/material";

const Header = ({ pathname }) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        py: 2,
      }}
    >
      <Grid item xs={10}>
        <Box fontSize={32} fontWeight={300}>
          <Link href="/">春川文化地圖</Link>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box
            fontWeight={300}
            sx={{
              textDecoration: pathname === "/about" ? "underline" : "none",
              textUnderlineOffset: "5px",
            }}
          >
            <Link href="/about">소개</Link>
          </Box>
          <Box
            fontWeight={300}
            sx={{
              textDecoration: pathname === "/map" ? "underline" : "none",
              textUnderlineOffset: "5px",
            }}
          >
            <Link href="/map">지도에서 보기</Link>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
