import { useEffect } from "react";
import { Box } from "@mui/material";

const Map = () => {
  useEffect(() => {
    if (kakao === null) {
      return;
    }

    const container = document.getElementById("map");
    kakao.maps.load(() => {
      let options = {
        center: new kakao.maps.LatLng(37.8817188, 127.7306207),
        level: 5,
      };
      let map = new kakao.maps.Map(container, options);
    });
  }, []);

  return (
    <>
      <Box id="map" sx={{ width: "100vw", height: "100vh" }}></Box>
    </>
  );
};

export default Map;
