import { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";

const Map = ({ placeList }) => {
  const [kakaoMap, setKakaoMap] = useState(null);
  const [geocoder, setGeocoder] = useState(null);
  const [bounds, setBounds] = useState(null);
  const [placeListArr, setPlaceListArr] = useState(placeList);
  const [markerArr, setMarkerArr] = useState([]);
  const windowSize = useWindowSize();

  const container = useRef();
  useEffect(() => {
    kakao.maps.load(() => {
      let options = {
        center: new kakao.maps.LatLng(37.8817188, 127.7306207),
        level: 7,
      };
      let map = new kakao.maps.Map(container.current, options);
      const geocoder = new kakao.maps.services.Geocoder();
      const bounds = new kakao.maps.LatLngBounds();
      setKakaoMap(map);
      setGeocoder(geocoder);
      setBounds(bounds);
    });
  }, [container]);

  useEffect(() => {
    if (geocoder === null) {
      return;
    }

    addMarkers(placeListArr);
    displayMarkers();
  }, [geocoder]);

  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }
    const center = kakaoMap.getCenter();
    kakaoMap.relayout();
    kakaoMap.setCenter(center);
  }, [kakaoMap, windowSize]);

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }

  function addMarkers() {
    placeListArr.forEach((place) => {
      if (place.type === "POINT") {
        // place can be represented as a point
        geocoder.addressSearch(place.addr, (result, status) => {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            let marker = new kakao.maps.Marker({
              map: kakaoMap,
              position: coords,
            });
            // bounds.extend(marker.getPosition());
            // kakaoMap.setBounds(bounds);
            setMarkerArr([...markerArr, marker]);
          }
        });
      } else {
        // place can be represented as a line
      }
    });
  }

  function displayMarkers() {
    markerArr.forEach((marker) => marker.setMap(kakaoMap));
  }

  return (
    <>
      <Box sx={{ width: "100vw", height: "100vh" }} ref={container}></Box>
    </>
  );
};

export default Map;
