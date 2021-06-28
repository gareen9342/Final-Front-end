 import React, { useState } from 'react';
import { useHistory } from 'react-router';
 import userService from '../../services/userService';

 const Register = () => {
    const history = useHistory();
    const [nickName, setNickName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [errorPhoneNumber, setErrorPhoneNumber] = useState(false);
    const [intro, setIntro] = useState("");
    const [location, setLocation] = useState("");

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

    const onChangeLocation = (e) => {
        setLocation(e.target.value);
        console.log(location);
    }

    const Regist = async () => {

        const phoneCheck = (value) => {
            const regExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
            return regExp.test(value);
        }
        
        if(phoneCheck(phoneNumber)){
            console.log(nickName, phoneNumber,intro, location);
            const data = {
                nickName,
                phoneNumber,
                intro,
            }
        
            const res = await userService.memberInsert(data);
            console.log(res);

            history.push("/");
        }else{
            console.log("전화번호 양식이 틀렷습니다.");
            setPhoneNumber("");
            setErrorPhoneNumber(true);
        }

        
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
                {errorPhoneNumber&&<p>전화번호 입력이 잘못되었습니다!</p>}
            </div>
            <div>
                <label htmlFor="user-intro">자기소개</label><br/>
                <textarea rows="5" cols="40" name="intro" value={intro} onChange={onChangeIntro} />
            </div>
            <div>
                <label htmlFor="user-intro">지역</label><br/>
                <input name="phoneNumber" value={location} onChange={onChangeLocation} />
            </div>
            <div>
                <button onClick={Regist}>가입하기</button>
            </div>          
        </>
    )
 }

 export default Register;