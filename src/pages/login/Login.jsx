import React from 'react';

import Kakao from "./Kakao";
import Naver from "./Naver";
import Google from "./Google";

const Login = ({signUserIn}) => {

    return(
        <>
        <div className="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-200">
            <div className="content text-3xl text-center md:text-left">
                <h1 className="text-5xl text-blue-500 font-bold">SWith</h1>
                <p>우리 같이 열정을 불태워봐요! 우리 같이 열정을 불태워봐요! 우리 같이 열정을 불태워봐요!</p>
            </div>

            <div className="container mx-auto flex flex-col items-center">
                <form className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
                    <Kakao signUserIn={signUserIn}/> 
                    <br/>
                    <Naver signUserIn={signUserIn}/>
                    <br/>
                    <Google signUserIn={signUserIn}/>
                    {/* <button onClick={() => signUserIn("pass")} className="w-full bg-green-400 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg">다음으로 가려면 <br/> 여기 눌러주세용</button> */}
                </form>
            </div>
        </div>
            
        </>
    )
}

export default Login;