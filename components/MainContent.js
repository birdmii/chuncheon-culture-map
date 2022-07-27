import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import RightTopArrow from "@icons/RightTopArrow";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const MainContent = ({ themeList }) => {
  const container = useRef();
  const [deltaY, setDeltaY] = useState(0);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    if(container.current !== undefined) {
      container.current.scrollLeft += deltaY;
    }
  }, [deltaY]);

  const handleWheel = (e) => {
    setDeltaY(e.deltaY);
  };

  return matches ? (
    <Box
      sx={{ display: "flex", overflow: "scroll" }}
      onWheel={(e) => handleWheel(e)}
      ref={container}
      mb={4}
    >
      {themeList.map((theme) => (
        <Box
          key={theme.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid",
            borderColor: "primary.main",
            minWidth: "400px",
            width: "400px",
            height: "400px",
            padding: "32px",
            ":not(:last-child)": {
              borderRight: 0,
            },
          }}
        >
          <Link href="/map/[mid]" as={`/map/${theme.id}`}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography fontSize={36} fontWeight={700} color="primary">
                  #{theme.id}
                </Typography>
                <Typography
                  fontSize={36}
                  fontWeight={700}
                  color="primary"
                  sx={{ lineHeight: "44px", wordBreak: "keep-all" }}
                >
                  {theme.title}
                </Typography>
              </Box>
              <Box>
                <RightTopArrow />
              </Box>
            </Box>
          </Link>
          <Box>
            <Typography fontSize={16} color="primary">
              {theme.uploadedAt}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  ) : (
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
  );
};

export default MainContent;
