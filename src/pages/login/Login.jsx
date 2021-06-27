import React from 'react';

import Kakao from "./Kakao";
import Naver from "./Naver";
import Google from "./Google";

const Login = ({signUserIn}) => {

    return(
        <>  
            <Kakao signUserIn={signUserIn}/> 
            <Naver signUserIn={signUserIn}/>
            <Google signUserIn={signUserIn}/>
            <br/>
            <button onClick={() => signUserIn("pass")} >다음화면으로 가려면 이거 눌러주세용</button>
        </>
    )
}

export default Login;