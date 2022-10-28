import { useEffect, useState, useRef } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { handlePlace, handleMarker, getPlace } from "@slices/markerSlice";

const Map = ({ placeList }) => {
  const dispatch = useDispatch();
  const [kakaoMap, setKakaoMap] = useState(null);
  const [geocoder, setGeocoder] = useState(null);
  const [bounds, setBounds] = useState(null);
  const [defaultMarkerImg, setDefaultMarkerImg] = useState(null);
  const [selectedMarkerImg, setSelectedMarkerImg] = useState(null);
  const [placeListArr, setPlaceListArr] = useState(placeList);
  const [markerArr, setMarkerArr] = useState([]);
  const [prevMarker, setPrevMarker] = useState(null);
  const windowSize = useWindowSize();
  const hoveredPlace = useSelector(getPlace);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const container = useRef();
  useEffect(() => {
    kakao.maps.load(() => {
      const options = {
        center: new kakao.maps.LatLng(37.8817188, 127.7306207),
        level: 7,
      };

      if (container.current !== null) {
        const map = new kakao.maps.Map(container.current, options);

        setDefaultMarkerImg(
          new kakao.maps.MarkerImage(
            "/assets/marker_default.png",
            new kakao.maps.Size(21, 34)
          )
        );
        setSelectedMarkerImg(
          new kakao.maps.MarkerImage(
            "/assets/marker_selected.png",
            new kakao.maps.Size(21, 34)
          )
        );
        setKakaoMap(map);
        setGeocoder(new kakao.maps.services.Geocoder());
        setBounds(new kakao.maps.LatLngBounds());
      }
    });
  }, [container]);

  useEffect(() => {
    if (hoveredPlace !== null) {
      if (prevMarker !== null) {
        prevMarker.setImage(defaultMarkerImg);
        prevMarker.setZIndex(1);
      }
      const selectedPlace = markerArr.filter(
        (marker) => marker.id === hoveredPlace.id
      )[0];

      if (selectedPlace !== undefined) {
        selectedPlace.marker.setImage(selectedMarkerImg);
        selectedPlace.marker.setZIndex(10);
        if(!matches) {
          kakaoMap.panTo(selectedPlace.marker.getPosition());
        }
        setPrevMarker(selectedPlace.marker);
      }
    } else {
      if (prevMarker !== null) {
        prevMarker.setImage(defaultMarkerImg);
        prevMarker.setZIndex(1);
      }
    }
  }, [hoveredPlace]);

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
                new kakao.maps.Size(21, 34)
              ),
            });

            kakao.maps.event.addListener(marker, "mouseover", () => {
              marker.setImage(selectedMarkerImg);
              dispatch(handlePlace(place));
              dispatch(handleMarker(place));
            });

            kakao.maps.event.addListener(marker, "mouseout", () => {
              marker.setImage(defaultMarkerImg);
              dispatch(handlePlace(null));
              dispatch(handleMarker(null));
            });
            bounds.extend(marker.getPosition());
            kakaoMap.setBounds(bounds, 10, 10, 32, 10);
            const markerObj = { id: place.id, marker };
            setMarkerArr((prevMarkerArr) => [...prevMarkerArr, markerObj]);
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
