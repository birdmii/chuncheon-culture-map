import { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";

const Map = ({ type, placeList }) => {
  const [kakaoMap, setKakaoMap] = useState(null);
  const [geocoder, setGeocoder] = useState(null);
  const [bounds, setBounds] = useState(null);
  const [defaultMarkerImg, setDefaultMarkerImg] = useState(null);
  const [selectedMarkerImg, setSelectedMarkerImg] = useState(null);
  const [placeListArr, setPlaceListArr] = useState(placeList);
  const [markerArr, setMarkerArr] = useState([]);
  const windowSize = useWindowSize();

  const container = useRef();
  useEffect(() => {
    kakao.maps.load(() => {
      const options = {
        center: new kakao.maps.LatLng(37.8817188, 127.7306207),
        level: 7,
      };
      const map = new kakao.maps.Map(container.current, options);
      setDefaultMarkerImg(
        new kakao.maps.MarkerImage(
          "/assets/marker_default.png",
          new kakao.maps.Size(60, 60)
        )
      );
      setSelectedMarkerImg(
        new kakao.maps.MarkerImage(
          "/assets/marker_selected.png",
          new kakao.maps.Size(60, 60)
        )
      );
      setKakaoMap(map);
      setGeocoder(new kakao.maps.services.Geocoder());
      setBounds(new kakao.maps.LatLngBounds());
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
              image: new kakao.maps.MarkerImage(
                "/assets/marker_default.png",
                new kakao.maps.Size(60, 60)
              ),
            });

            kakao.maps.event.addListener(marker, "mouseover", () => {
              marker.setImage(selectedMarkerImg);
            });

            kakao.maps.event.addListener(marker, "mouseout", () => {
              marker.setImage(defaultMarkerImg);
            });
            bounds.extend(marker.getPosition());
            kakaoMap.setBounds(bounds);
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
      <Box
        sx={{ width: "100%", height: "calc(100vh - 73px)" }}
        ref={container}
      ></Box>
    </>
  );
};

export default Map;
