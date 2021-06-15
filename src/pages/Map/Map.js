import React, { useState } from 'react'
import "./style.css"
import MapService from './MapService';
import MapContainer from './MapContainer';

export default function KakaoMap() {

  const [visible, setVisible] = useState(true);
  const [mapSize, setMapSize] = useState([400, 400]);
  const [markers, setMarkers] = useState([]);
  const [locationInfo, setLocationInfo] = useState([]);

  const [value, setValue] = useState('');


  const onSearching = (event) => {
    // 검색된애 센터정보 넘겨줘야돼
    setLocationInfo(event.currentTarget.value)
  }

  const onValueChange = (e) => {
    setValue(e.currentTarget.value)
    console.log(value)
  }

  return (
    <>

      {visible && (
        <MapService locationInfo={locationInfo} size={mapSize} />
      )}
      <div style={{ alignContent: "center", color: "ghostwhite", backgroundColor: "royalblue" }}>
        <button onClick={() => setMapSize([200, 400])} >리사이징</button>
        <button onClick={() => setVisible(!visible)}>토글</button>
        <button>임시</button>
        <button>임시</button>
      </div>
      <div>
        {/* 요거 검색 완료하면 넘기는 걸로 바껑 */}
        <input type="text" maxLength="25" placeholder="예시: 잠실 스타벅스" onChange={onValueChange} />
      </div>
      <MapContainer searchPlace={value} />

    </>
  )
}



