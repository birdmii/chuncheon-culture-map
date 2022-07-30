import { styled } from "@mui/material/styles";
import {
  Checkbox,
  Box,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import CheckboxBorder from "@icons/CheckboxBorder";
import Download from "@icons/Download";
import CheckboxChecked from "@icons/CheckboxChecked";
import RightTopArrowSm from "@icons/RightTopArrowSm";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:first-of-type)": {
    borderTop: 0,
  },
  "&:before": {
    display: "none",
  },
}));
const ThemeList = ({ placeList }) => {
  return (
    <>
      {placeList.map((theme) => (
        <Accordion
          key={theme.id}
          sx={{
            borderBottom: "1px solid",
            borderRight: 0,
            borderLeft: 0,
            borderBottomColor: "primary.main",
            backgroundColor: "background.default",
          }}
        >
          <AccordionSummary expandIcon={<RightTopArrowSm />}>
            <Box
              key={theme.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              py={1}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Checkbox
                  icon={<CheckboxBorder />}
                  checkedIcon={<CheckboxChecked />}
                />
                <Box ml={1}>
                  <Typography color="primary" fontSize="18px" fontWeight={700}>
                    #{theme.id}
                  </Typography>
                  <Typography color="primary" fontSize="18px" fontWeight={700}>
                    {theme.title}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <Typography color="primary.main" mx={2}>
              {theme.content}
            </Typography>
            <a href={theme.mapUrl} target="_blank" rel="noreferrer">
              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  backgroundColor: "primary.main",
                }}
                m={2}
                py={1}
              >
                <Download />{" "}
                <Typography color="#F9F6ED" ml={1}>
                  지도 다운로드
                </Typography>
              </Box>
            </a>
            {theme.place.map((place) => (
              <Box
                key={place.id}
                sx={{
                  borderTop: "1px solid",
                  borderTopColor: "primary.main",
                }}
                p={2}
              >
                <Box>
                  <Typography
                    color="primary"
                    fontSize="18px"
                    fontWeight={700}
                    sx={{
                      lineHeight: "28px",
                      textDecoration: place.isShutdown
                        ? "line-through"
                        : "none",
                      textDecorationThickness: "2px",
                    }}
                  >
                    {place.name}
                  </Typography>
                  <Typography color="primary" fontSize="14px">
                    {place.addrAbbr}
                  </Typography>
                </Box>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default ThemeList;
