import React from 'react';

import Kakao from "./Kakao";
import Naver from "./Naver";
import Google from "./Google";

const Login = ({signUserIn}) => {

    return(
        <>
            <Kakao/>
            <Naver/>
            <Google signUserIn={signUserIn}/>
        </>
    )
}

export default Login;