 import React, { useState } from 'react';

 const Register = () => {

    const [nickName, setNickName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [intro, setIntro] = useState("");

    const onChangeNickName = (e) => {
        setNickName(e.target.value);
    }

    const onChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }

    const onChangeIntro = (e) => {
        setIntro(e.target.value);
    }

    return(
        <>
            <form>
                <div>
                    <label htmlFor="user-nick">닉네임</label><br/>
                    <input name="user-nick" value={nickName} required onChange={onChangeNickName} />
                </div>
                <div>
                    <label htmlFor="user-phoneNum">핸드폰번호</label><br/>
                    <input name="user-phoneNumber" value={phoneNumber} required onChange={onChangePhoneNumber} />
                </div>
                <div>
                    <label htmlFor="user-intro">자기소개</label><br/>
                    <textarea rows="5" cols="40" name="user-intro" value={intro} onChange={onChangeIntro} />
                </div>
                <div>
                    <button>가입하기</button>
                </div>
            </form>
           
        </>
    )
 }

 export default Register;