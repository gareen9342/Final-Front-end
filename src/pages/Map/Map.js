import React, { useState } from 'react'
import "./style.css"
import MapService from './MapService';
import MapContainer from './MapContainer';
import useInput from '../../hooks/useInput';

export default function KakaoMap() {

  const [visible, setVisible] = useState(true);
  const [locationInfo, setLocationInfo] = useState([]);

  // 장소 검색
  const [searchText, onChangeSearchText] = useInput('');


  const onSearching = () => {
    setLocationInfo(searchText)
    console.log("locationInfo : " + locationInfo)
  }

  return (
    <>

      {visible && (
        <MapService locationInfo={locationInfo} />
      )}
      <div>
        <button onClick={() => setVisible(!visible)}>토글</button>
      </div>
      <div>
        {/* 요거 검색 완료하면 넘기는 걸로 바껑 */}
        <input type="text" maxLength="25" value={searchText}
          placeholder="장소를 입력하세요" onChange={onChangeSearchText} />
        <button onClick={onSearching} >검색</button>
      </div>
      <MapContainer searchPlace={locationInfo} />

    </>
  )
}



