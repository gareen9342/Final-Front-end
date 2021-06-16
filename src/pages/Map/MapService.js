import Axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import "./style.css"
import useInput from '../../hooks/useInput';
const { kakao } = window;

const MapService = () => {

  const [visible, setVisible] = useState(true);

  const [kakaoMap, setKakaoMap] = useState(null);
  const [kakaoPs, setKakaoPs] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);
  const [searchText, onChangeSearchText] = useInput('');

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
    const center = new kakao.maps.LatLng(37.50802, 127.062835); // 초기 지도 센터값 세팅은 아무데로나 했음
    const options = {
      center,
      level: 4,
    };
    const map = new kakao.maps.Map(mapContainer.current, options);

    //여기가 돔에 세팅하는 단
    setKakaoMap(map);
    // setMarkerPosition(markerPosition);
    const ps = new kakao.maps.services.Places();
    setKakaoPs(ps);
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    setInfoWindow(infowindow);
  }, [mapContainer]);

  /**
   * ================= 지도 센터값 세팅
   */
  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }

    // save center position
    const center = kakaoMap.getCenter();

    // change viewport size
    mapContainer.current.style.width = `60vw`;
    mapContainer.current.style.height = `${200}px`;

    // relayout and...
    kakaoMap.relayout();
    // restore
    kakaoMap.setCenter(center);
  }, [kakaoMap]);
  const onClickSearchButton = () => {
    if (kakaoPs == null) {
      return;
    }
    kakaoPs.keywordSearch(searchText, placeSearchCB);
  };
  const placeSearchCB = (data, status, pagination) => {
    if (status === kakao.maps.services.Status.OK) {
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      var bounds = new kakao.maps.LatLngBounds();
      //마커 초기화부터 진행
      markersPosition.map((x) => x.setMap(null));
      const tempArr = [];
      for (var i = 0; i < data.length; i++) {
        const newMarker = displayMarker(data[i]);
        tempArr.push(newMarker);
        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
      }
      setMarkersPosition(tempArr);
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      kakaoMap.setBounds(bounds);
    }
  };
  const displayMarker = (place) => {
    let marker = null;
    if (!!kakaoMap) {
      marker = new kakao.maps.Marker({
        map: kakaoMap,
        position: new kakao.maps.LatLng(place.y, place.x),
      });
      //마커에 클릭 이벤트를 등록한다.

      kakao.maps.event.addListener(marker, "click", function () {
        // console.log(place.address_name, place.id);
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infoWindow.setContent(
          '<div style="padding:5px;font-size:12px;cursor:pointer;" >' +
          place.place_name +
          "</div>"
        );
        infoWindow.open(kakaoMap, marker);
      });
    }
    return marker;
  };


  return (
    <>
      <div id="mapContainer" ref={mapContainer} />

      <div>
        <button onClick={() => setVisible(!visible)}>토글</button>
      </div>
      <div>
        {/* 요거 검색 완료하면 넘기는 걸로 바껑 */}
        <input type="text" maxLength="25" value={searchText}
          placeholder="장소를 입력하세요" onChange={onChangeSearchText} />
        <button onClick={onClickSearchButton} >검색</button>
      </div>

    </>
  )
}


export default MapService;
