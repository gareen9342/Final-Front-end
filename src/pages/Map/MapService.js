import Axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const { kakao } = window;

const MapService = (props) => {
  const { locationInfo } = props;

  const [kakaoMap, setKakaoMap] = useState(null);
  const [kakaoPs, setKakaoPs] = useState(null);
  const [searchedPlaces, setSearchedPlaces] = useState([]);
  const [infoWindow, setInfoWindow] = useState(null);

  const [markersPosition, setMarkersPosition] = useState([]);

  const mapContainer = useRef();




  // from DB, get markers
  // useEffect(() => {

  //   Axios.get('/somewhere').then(response => {
  //     if (response.data.success) {
  //       // 마커들 가져왔슴(주소로 가져온다.)
  //       // 반경처리는 따로 해줘야된다.
  //       // setLocationAddr(response.data.^^ID^^)
  //     } else {
  //       alert('이지역 사람들이 공부를 안하네요~');
  //     }
  //   })

  // }, [])

  // 로딩
  useEffect(() => {
    const mapOption = {
      center: new kakao.maps.LatLng(37.51138291837466, 127.09807488796521), // 지도 중심
      level: 5 // 확대 레벨
    };
    // div, 지도 옵션 > 지도 생성
    const map = new kakao.maps.Map(mapContainer.current, mapOption);
    setKakaoMap(map);
    const ps = new kakao.maps.services.Places()
    setKakaoPs(ps);
    const iw = new kakao.maps.InfoWindow({ zIndex: 1 })
    setInfoWindow(iw);

    // HTML5의 geolocation 사용할 수 있는지 확인 
    if (navigator.geolocation) {
      // GeoLocation, 접속위치 get
      navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
        let locPosition = new kakao.maps.LatLng(lat, lon); // 마커 표시 위치 > geolocation 좌표로
        // 마커, 인포윈도우 표시
        displayMarker(locPosition);
      });
    } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치
      let locPosition = new kakao.maps.LatLng(37.56642857824065, 126.95110193435923);
      displayMarker(locPosition);
    }

    // 지도에 마커, 인포윈도우
    const displayMarker = (locPosition) => {
      // 마커 생성
      let marker = new kakao.maps.Marker({
        map: map,
        position: locPosition
      });
      setMarkersPosition(marker);
      // 부드러운 이동
      map.panTo(locPosition);
    }

  }, [mapContainer]);


  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }
    const center = kakaoMap.getCenter();

    // set map size
    mapContainer.current.style.width = `60vw`;
    mapContainer.current.style.height = `300px`;

    kakaoMap.relayout();
    // restore
    kakaoMap.setCenter(center);

  }, [kakaoMap]);


  // 검색
  useEffect(() => {
    if (kakaoPs === null) {
      return;
    }

    kakaoPs.keywordSearch(locationInfo, placesSearchCB)

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds()

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i])
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }
        kakaoMap.setBounds(bounds);
        // 매장 목록 displayPagination()
        // displayPagination(pagination);
        setSearchedPlaces(data);
      }
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: kakaoMap,
        position: new kakao.maps.LatLng(place.y, place.x),
      })

      kakao.maps.event.addListener(marker, 'click', function () {
        infoWindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>')
        infoWindow.open(kakaoMap, marker)
      })
    }

  }, [kakaoMap, locationInfo])

  const resetMarkers = () => {
    for (let i = 0; i < markersPosition.length; i++) {
      markersPosition[i].setMap(null);
    }
    setMarkersPosition([]);
  };


  const checker = () => {
    resetMarkers();
    console.log(markersPosition);
    console.log(searchedPlaces);
    console.log(kakaoMap);
  }


  return (
    <>
      <div id="mapContainer" ref={mapContainer} />
      <button onClick={checker}>checker</button>
    </>
  )
}


export default MapService;
