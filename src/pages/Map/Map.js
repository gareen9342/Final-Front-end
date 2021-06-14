import React, { useState } from 'react'
import "./style.css"
import MapTest from './MapService';

export default function KakaoMap() {

  const [visible, setVisible] = useState(true);
  const [mapSize, setMapSize] = useState([400, 400]);
  const markers = console.log('get Markers!!');

  return (
    <>

      {visible && (
        <MapTest markers={markers} size={mapSize} />
      )}
      <div style={{ alignContent: "center", color: "ghostwhite", backgroundColor: "royalblue" }}>
        <button style={{ border: "1px solid red" }} onClick={() => setMapSize([400, 400])} >뿌</button>
        <button onClick={() => setVisible(!visible)}>보톤</button>
        <button>브튼</button>
        <button>버턴</button>
      </div>

    </>
  )
}



