import Axios from "axios";
import React, { useEffect, useRef, useState, useMemo } from "react";
import "./style.css";
import StudyComponent from './Sections/StudyComponent';
import useInput from "../../hooks/useInput";
import StudyInfo from "../../dummyData/study.json";
import StudyService from '../../services/studyService';

const { kakao } = window;

const MapService = () => {
  const [kakaoMap, setKakaoMap] = useState(null);
  const [kakaoPs, setKakaoPs] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);
  // 위치 검색 input
  const [searchText, onChangeSearchText] = useInput("");
  // 마커 객체들 정보
  const [markersPosition, setMarkersPosition] = useState([]);
  // 위치 검색 버튼
  const [activateNear, setActivateNear] = useState(false);
  // 반경 정보
  const [range, setRange] = useState(500);
  // 스터디 위치정보
  const [studyResult, setStudyResult] = useState([]);


  const mapContainer = useRef();



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

    // relayout
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


  // 마커 이벤트
  const displayMarker = (place) => {
    let marker = null;
    if (!!kakaoMap) {
      marker = new kakao.maps.Marker({
        map: kakaoMap,
        position: new kakao.maps.LatLng(place.y, place.x),
      });
      // 마커에 이벤트 등록
      kakao.maps.event.addListener(marker, "click", function () {
        // console.log(place.address_name, place.id);

        // 선택 기준 탐색 (보류)
        // const pickHere = (async () => {
        //   try {
        //     const { data } = await StudyService.searchStudy(place.y, place.x, range);
        //     if (!!data && data.length) {
        //       setStudyResult([]);
        //       console.log(data);
        //       setStudyResult(data);
        //     }
        //   } catch (err) {
        //     console.error(err);
        //   }
        // })();

        // 마커 인포윈도우
        let content = '<div style="padding:5px;font-size:12px;cursor:pointer;" >' +
          place.place_name +
          "</div>";
        // + `<button onClick="pickHere()" style="border:1px solid skyblue;float:right;">탐색</button>`;


        infoWindow.setContent(content);
        infoWindow.open(kakaoMap, marker);
      });
      kakao.maps.event.addListener(kakaoMap, "click", function () {
        infoWindow.close();
      });


    }
    return marker;
  };

  // 현위치
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

  // 마커 기준 주변 위치 탐색
  const searchNear = () => {
    alert('탐색을 원하는 위치를 클릭하세요');
    setActivateNear(true);
    let marker = new kakao.maps.Marker({
      position: kakaoMap.getCenter()
    });
    marker.setMap(kakaoMap);

    let circle = new kakao.maps.Circle({
      center: kakaoMap.getCenter(),
      // radius: polyline.getLength() / 2,
      radius: range,
      strokeWeight: 1,
      strokeColor: '#00a0e9',
      strokeOpacity: 0.1,
      strokeStyle: 'solid',
      fillColor: '#00a0e9',
      fillOpacity: 0.2
    });
    circle.setMap(kakaoMap);

    let lat, lng;
    let mE = (mouseEvent) => {
      // 클릭한 위도, 경도 정보를 가져옵니다
      let latlng = mouseEvent.latLng;
      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);
      circle.setPosition(latlng);

      lat = latlng.getLat();
      lng = latlng.getLng();

    }

    kakao.maps.event.addListener(kakaoMap, 'click', mE);

    let confirmEvent = () => {
      let res = confirm('이 주변 스터디를 탐색할까요?');
      if (res) {
        setActivateNear(false);
        // console.log(StudyInfo.data);

        if (!!lng && !!lat) {
          (async () => {
            try {
              const { data } = await StudyService.searchStudy(lat, lng, range);
              if (!!data && data.length) {
                setStudyResult([]);
                console.log(data);
                setStudyResult(data);
              }
            } catch (err) {
              console.error(err);
            }
          })();

        }

      } else {
        setActivateNear(false);
      }
      kakao.maps.event.removeListener(kakaoMap, 'click', mE);
      kakao.maps.event.removeListener(kakaoMap, 'click', confirmEvent);
      marker.setMap(null);
      circle.setMap(null);
      // console.log(activateNear);
    }

    kakao.maps.event.addListener(marker, 'click', confirmEvent);
  };




  // -------------------------------forTest--------------------------------

  const checker = () => {
    console.log("----------------------");
    console.log(markersPosition);
    console.log("----------------------");
  };

  const deleter = () => {
    setMarkersPosition([]);
  };

  // ----------------------------------------------------------------------

  const onChangeRange = (e) => {
    setRange(e.target.value);
  }
  // 범위 옵션
  const rangeNear = useMemo(() => [
    { value: 500, label: "500m" },
    { value: 1000, label: "1km" },
    { value: 2000, label: "2km" },
  ], [])

  // 300 이었던 것
  const leftWidth = 0;
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
        <button onClick={onFocusCenter}>현위치</button>
        <br />
        {activateNear === false ? <>
          <button onClick={searchNear}>
            주변 스터디 탐색하기
          </button>
          <select onChange={onChangeRange} value={range}>{console.log("range = ", range)}
            {rangeNear.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select> </> : ''}

        <br />
        <button onClick={checker}>체크</button>
        <button onClick={deleter}>del</button>
      </div>
      {/* nav */}
      <div
        className="border border-grey-lighter"
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
