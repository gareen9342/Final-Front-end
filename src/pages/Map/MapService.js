import Axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const { kakao } = window;

const MapService = (props) => {
  const { locationInfo, size } = props;
  const [kakaoMap, setKakaoMap] = useState(null);
  const [locationAddr, setLocationAddr] = useState([]);

  const mapContainer = useRef();


  // from DB, get markers
  useEffect(() => {

    Axios.get('/somewhere').then(response => {
      if (response.data.success) {
        // 마커들 가져왔슴(주소로 가져온다.)
        // 반경처리는 따로 해줘야된다.
        // setLocationAddr(response.data.^^ID^^)
      } else {
        alert('이지역 사람들이 공부를 안하네요~');
      }
    })

  }, [])


  useEffect(() => {
    console.log(props)

    // 로딩
    const mapOption = {
      center: new kakao.maps.LatLng(37.51138291837466, 127.09807488796521), // 지도 중심
      level: 5 // 확대 레벨
    };
    // div, 지도 옵션 > 지도 생성
    const map = new kakao.maps.Map(mapContainer.current, mapOption);
    setKakaoMap(map);

    // HTML5의 geolocation 사용할 수 있는지 확인 
    if (navigator.geolocation) {
      // GeoLocation, 접속위치 get
      navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
        let locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시 위치 > geolocation 좌표로
        // 마커, 인포윈도우 표시
        displayMarker(locPosition);
      });
    } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치
      let locPosition = new kakao.maps.LatLng(37.56642857824065, 126.95110193435923);
      displayMarker(locPosition);
    }

    // 지도에 마커, 인포윈도우
    function displayMarker(locPosition) {
      // 중첩마커 삭제
      // delMarker();
      // 마커 생성
      let marker = new kakao.maps.Marker({
        map: map,
        position: locPosition
      });
      // 부드러운 이동
      map.panTo(locPosition);
    }

  }, [mapContainer]);


  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }

    const center = kakaoMap.getCenter();

    // 사이즈 조절 할일 있으면 쓰자
    const [width, height] = size;
    mapContainer.current.style.width = `${width}px`;
    mapContainer.current.style.height = `${height}px`;

    //   // 리사이징시 레이아웃 필수
    kakaoMap.relayout();
    // restore
    kakaoMap.setCenter(center);

  }, [kakaoMap, size]);


  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }




  }, [kakaoMap,])


  return (
    <>
      <div id="mapContainer" ref={mapContainer} />
    </>
  )
}


export default MapService;
