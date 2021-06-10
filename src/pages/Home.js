import React, { useEffect, useState } from "react";
import TestService from "../services/testService";

export default () => {
  // ============ 샘플 서버와 테스트 통신을 하기 위해 작성했던 코드 ==========//
  //   const [tests, setTests] = useState([]);
  //   useEffect(() => {
  //     const data = TestService.getTestPosts();
  //     console.log(data); // 데이터 요
  //   }, []);

  const onClickButton = async () => {
    const res = await TestService.postTestPosts();
    console.log(res);
  }
  return (
    <>
      <div>"home"</div>
      <button onClick={onClickButton}>click to test post request</button>
    </>
  );
};
