 import React, { useState } from 'react';
 import userService from '../../services/userService';

 const Register = () => {

    const [nickName, setNickName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [intro, setIntro] = useState("");

    const onChangeNickName = (e) => {
        setNickName(e.target.value);
        console.log(nickName);
    }

    const onChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
        console.log(phoneNumber);
    }

    const onChangeIntro = (e) => {
        setIntro(e.target.value);
        console.log(nickName);
    }

    const Regist = async () => {
        console.log(nickName, phoneNumber,intro);
        const data = {
            nickName : {nickName},
            phoneNumber : {phoneNumber},
            intro : {intro},
        }
        console.log(data);

        const res = await userService.memberInsert(data);
        console.log(res);
    }

    return(
        <>

                <div>
                    <label htmlFor="user-nick">닉네임</label><br/>
                    <input name="nickName" value={nickName} required onChange={onChangeNickName} />
                </div>
                <div>
                    <label htmlFor="user-phoneNum">핸드폰번호</label><br/>
                    <input name="phoneNumber" value={phoneNumber} required onChange={onChangePhoneNumber} />
                </div>
                <div>
                    <label htmlFor="user-intro">자기소개</label><br/>
                    <textarea rows="5" cols="40" name="intro" value={intro} onChange={onChangeIntro} />
                </div>
                <div>
                    <button onClick={Regist}>가입하기</button>
                </div>
 
           
        </>
    )
 }

 export default Register;