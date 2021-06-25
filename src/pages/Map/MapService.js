import Axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import StudyComponent from './Sections/StudyComponent';
import useInput from "../../hooks/useInput";

const { kakao } = window;

const MapService = () => {
  const [kakaoMap, setKakaoMap] = useState(null);
  const [kakaoPs, setKakaoPs] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);
  const [searchText, onChangeSearchText] = useInput("");
  const [markersPosition, setMarkersPosition] = useState([]);

  const mapContainer = useRef();

  // from DB, get markers
  // useEffect(() => {

  //   Axios.get('/somewhere').then(response => {
  //     if (response.data.success) {
  //       // 마커들 가져왔슴(주소id로 가져온다.)
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

    // DOM 세팅단
    setKakaoMap(map);
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
    mapContainer.current.style.width = `100%`;
    mapContainer.current.style.height = `100%`;

    // relayout and...
    kakaoMap.relayout();
    // restore
    kakaoMap.setCenter(center);
    kakao.maps.event.addListener(kakaoMap, "rightclick", eventRemover);
    return () => {
      kakao.maps.event.removeListener(kakaoMap, "rightclick", eventRemover);
      setMarkersPosition([]);
    };
  }, [kakaoMap]);

  // // 마커,인포윈도 삭제 이벤트 (rClick)
  // useEffect(() => {
  //   if (kakaoMap === null) {
  //     return;
  //   }
  //   // setMarkersPosition([]);

  // }, [kakaoMap, markersPosition]);

  const eventRemover = (e) => {
    console.log("here", markersPosition);
    markersPosition.map((x) => x.setMap(null));
    infoWindow.close();
    setMarkersPosition([]);
    console.log(e.latLng.toString());
  };

  // const eventRemover = (e) => {
  //   console.log(markersPosition);
  //   markersPosition.map(x => x.setMap(null));
  //   infoWindow.close();
  // }

  // kakao.maps.event.addListener(kakaoMap, 'rightclick', eventRemover);
  // kakao.maps.event.removeListener(kakaoMap, 'rightclick', eventRemover);

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
      // 마커 초기화부터 진행
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


  // 마커 클릭 이벤트
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
          "</div>" +
          '<button style="border:1px solid skyblue;float:right;">버튼이얌</button>'
        );
        infoWindow.open(kakaoMap, marker);
      });
    }
    return marker;
  };


  // 
  const onFocusCenter = () => {
    if (kakaoMap && navigator.geolocation) {
      // GeoLocation, 접속위치 get
      navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
        let locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시 위치 > geolocation 좌표로
        focusCenter(locPosition);
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치
      let locPosition = new kakao.maps.LatLng(
        37.56642857824065,
        126.95110193435923
      );
      focusCenter(locPosition);
    }

    const focusCenter = (locPosition) => {
      kakaoMap.panTo(locPosition);
    };
  };


  const searchNear = () => {
    let marker = new kakao.maps.Marker({
      // 지도 중심 마커 생성
      position: kakaoMap.getCenter()
    });
    marker.setMap(kakaoMap);

    kakao.maps.event.addListener(kakaoMap, 'click', function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      let latlng = mouseEvent.latLng;
      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);

      let message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
      message += '경도는 ' + latlng.getLng() + ' 입니다';
      console.log(message);
    });
  }

  // const markerBornClick = () => {
  //   kakao.maps.event.addListener(kakaoMap, "click", function (mouseEvent) {
  //     let marker = new kakao.maps.Marker({
  //       map: kakaoMap,
  //       position: kakaoMap.center,
  //     });
  //     let latlng = mouseEvent.latLng;
  //     // tmpMarker.push(marker);
  //     // console.log(tmpMarker);
  //     marker.setPosition(latlng);
  //     activateCircle(latlng);
  //     const tempArr = markersPosition.push(marker);
  //     setMarkersPosition(tempArr);
  //     // setMarkersPosition([...markersPosition, marker]);
  //     console.log("tempArr = ", tempArr);

  //     // console.log(`${latlng} was Clicked!`);
  //   });
  // };


  // const activateCircle = (latlng) => {
  //   console.log(`type param-latlng ${typeof latlng}`)
  //   let circle = new kakao.maps.Circle({

  //     // 수정 요
  //     center: new kakao.maps.LatLng(latlng),
  //     // radius: polyline.getLength() / 2,
  //     radius: 500,
  //     strokeWeight: 1,
  //     strokeColor: '#00a0e9',
  //     strokeOpacity: 0.1,
  //     strokeStyle: 'solid',
  //     fillColor: '#00a0e9',
  //     fillOpacity: 0.2
  //   });
  //   circle.setMap(kakaoMap);

  //   // circleCenter = circle.getPosition();
  //   // circleRadius = circle.getRadius();
  // }




  // ----------------------------------------------------------------------

  const checker = () => {
    console.log("----------------------");
    console.log(markersPosition);
    console.log("----------------------");
  };

  const deleter = () => {
    setMarkersPosition([]);
  };

  // ----------------------------------------------------------------------




  const leftWidth = 300;
  return (
    <div>
      <div>
        <input
          type="text"
          maxLength="30"
          value={searchText}
          placeholder="장소를 입력하세요!"
          onChange={onChangeSearchText}
        />
        <button onClick={onClickSearchButton}>검색</button>
        <br />
        <button onClick={onFocusCenter}>현위치!!!</button>
        <button onClick={searchNear}>마커</button>

        <br />
        <button onClick={checker}>체크</button>
        <button onClick={deleter}>del</button>
      </div>
      {/* nav */}
      <div
        class="border border-grey-lighter"
        style={{ display: "flex", minHeight: "100vh" }}
      >
        {/* <div
          class="border border-grey-lighter"
          style={{ width: `${leftWidth}px`, height: "100%" }}
        >
          <div class="bg-hotpink rounded-3xl p-5">yap</div>
          <StudyComponent />
          <br />
          <StudyComponent />
        </div> */}

        <div
          style={{
            height: "calc(100vh - 90px)",
            width: `calc(100% - ${leftWidth}px)`,
            border: "1px solid ",
          }}
        >
          <div id="mapContainer" ref={mapContainer} />
        </div>
      </div>
    </div>
  );
};

export default MapService;
