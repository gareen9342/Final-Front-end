/* not for import, only test */





import React, { useEffect, useState } from "react";

const { kakao } = window;

const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소
  imageSize = new kakao.maps.Size(30, 45), // 마커이미지의 크기
  imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정

const MapContainer1 = ({ kakaoMap, list, searchSpot, addFood }) => {
  const [markers, setMarkers] = useState([]);

  const getOverlay = (place, pos) => {
    const overlay = new kakao.maps.CustomOverlay();

    const closeOverlay = () => {
      overlay.setMap(null);
    }

    const closeBtn = document.createElement('div');
    const addBtn = document.createElement('span');
    const content = document.createElement('div');

    closeBtn.innerHTML = `<div class="close" onClick="${() => closeOverlay()}"title="닫기" id="close"/>`;
    addBtn.innerHTML = `<span class="add" onClick="${() => addFood(place.place_name, place.y, place.x, place.address_name, place.place_url)}"> 추가 </span>`;

    content.innerHTML = `<div class="wrap">` +
      '    <div class="info">' +
      '        <div class="title">' +
      `            ${place.place_name}` +
      closeBtn.innerHTML +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="desc">' +
      `                <div class="ellipsis"> 주소 : ${place.address_name}</div>` +
      `                <div> 사이트 : <a href=${place.place_url} tar get="_blank" class="link"> 홈페이지</a></div>` +
      `                <div class="btns">` +
      addBtn.innerHTML +
      '                </div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>';
    overlay.setContent(content);
    overlay.setPosition(pos);

    content.addEventListener('click', (e) => {
      e.preventDefault();
      closeOverlay()
    });
    content.addEventListener('click', (e) => {
      e.preventDefault();
      addFood(place.place_name, place.y, place.x, place.address_name, place.place_url)
    });
    return overlay;
  }

  // 검색 기능
  useEffect(() => {
    // 오류 났을 시
    if (kakaoMap === null) {
      return;
    }


    const container = document.getElementById('myMap')
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    }
    const map = new kakao.maps.Map(container, options)


    const ps = new kakao.maps.services.Places();

    // 검색
    const placesSearchCB = (data, status, pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // LatLngBounds 객체에 좌표  추가
        const pos = data.map((item) => {
          return new kakao.maps.LatLng(item.y, item.x);
        });

        markers.forEach(prevMarker => prevMarker.setMap(null)); // setMarkers로 접근할 필요가 없다,,,,,
        const marker = pos.map((pos, index) => {
          const newM = new kakao.maps.Marker({ map: kakaoMap, position: pos });
          const overlay = getOverlay(data[index], pos);

          kakao.maps.event.addListener(newM, 'click', () => {
            overlay.setMap(kakaoMap);
          });

          return newM;
        });
        setMarkers(marker);

        // 맵 이동
        if (pos.length > 0) {
          const bounds = pos.reduce(
            (bounds, latlng) => bounds.extend(latlng),
            new kakao.maps.LatLngBounds()
          );
          kakaoMap.setBounds(bounds);
        }
      }
    }

    ps.keywordSearch(searchSpot, placesSearchCB);

  }, [kakaoMap, searchSpot, list]);

  // 맛집들 marker 표시
  useEffect(() => {
    const markerImg = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

    const displayMarker = (task) => {
      const pos = new kakao.maps.LatLng(task.latitude, task.longitude);

      const marker = new kakao.maps.Marker({
        map: kakaoMap,
        image: markerImg,
        position: pos
      });
      const overlay = getOverlay(task, pos);

      kakao.maps.event.addListener(marker, 'click', () => {
        overlay.setMap(kakaoMap);
      })
    }

    list.map((task) => {
      displayMarker(task);
    })

  }, [kakaoMap, list]);

  return (
    <>
      <div is="myMap" style={{ width: "300px", height: "300px" }} />
    </>
  );
}

export default MapContainer1;
