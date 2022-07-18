import { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";

const Map = ({ placeList }) => {
  const [kakaoMap, setKakaoMap] = useState(null);
  const [geocoder, setGeocoder] = useState(null);
  const [placeListArr, setPlaceListArr] = useState(placeList);
  const windowSize = useWindowSize();

  const container = useRef();
  useEffect(() => {
    kakao.maps.load(() => {
      let options = {
        center: new kakao.maps.LatLng(37.8817188, 127.7306207),
        level: 5,
      };
      let map = new kakao.maps.Map(container.current, options);
      let geocoder = new kakao.maps.services.Geocoder();
      setKakaoMap(map);
      setGeocoder(geocoder);
    });
  }, [container]);

  useEffect(() => {
    if (geocoder === null) {
      return;
    }

    geocoder.addressSearch(placeListArr.addr, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        let marker = new kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성
          position: kakaoMap.getCenter(),
        });

        marker.setMap(null);
        // 결과값으로 받은 위치를 마커로 표시
        marker = new kakao.maps.Marker({
          map: kakaoMap,
          position: coords,
        });
        marker.setMap(kakaoMap);
        // 지도의 중심을 결과값으로 받은 위치로 이동
        kakaoMap.setCenter(coords);
      } else {
        const coords = new kakao.maps.LatLng(37.8817188, 127.7306207);
        kakaoMap.setCenter(coords);
      }
    });
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

  return (
    <>
      <Box sx={{ width: "100vw", height: "100vh" }} ref={container}></Box>
    </>
  );
};

export default Map;
