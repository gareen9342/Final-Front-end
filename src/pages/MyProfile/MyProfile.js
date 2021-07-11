import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import userService from '../../services/userService';

const MyProfile = () => {
    const email = window.localStorage.getItem("email");
    const history = useHistory();
    const [nickName, setNickName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [errorPhoneNumber, setErrorPhoneNumber] = useState(false);
    const [intro, setIntro] = useState("");
    const [location, setLocation] = useState("");
    
    // useEffect(() => {
    //     (async() => {
    //         const getData = await 
    //     })
    // }, [])

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
            console.log(nickName, phoneNumber,intro, location,email);
            const data = {
                email,
                nickName,
                phoneNumber,
                location,
                intro,
            }
        
            const res = await userService.memberUpdate(data);
            console.log(res.data);
            console.log(typeof(res.data));
            console.log(res);
            if(res.data){
                history.push("/");
            } else {
                alert("수정x");
                history.push("/myprofile")
            }
            
        }else{
            setPhoneNumber("");
            setErrorPhoneNumber(true);
        }
    }
    
    return (
        <>
            <div className="grid min-h-screen place-items-center">
                <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
                    <h1 className="text-xl font-semibold">내 프로필 수정하기 👋,<br/> <span className="font-normal"> 당신의 정보를 작성해 주세요</span></h1>
                    <div className="mt-6">
                        <label htmlFor="nickName" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">닉네임</label>
                        <input type="text" name="nickName" placeholder="닉네임을 작성해주세요"  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required value={nickName} onChange={onChangeNickName}/>
                        
                        <label htmlFor="phoneNumber" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">핸드폰번호</label>
                        <input type="text" name="phoneNumber" placeholder="- 없이 작성해 주세요"  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required value={phoneNumber} onChange={onChangePhoneNumber}/>
                        <br/>
                        {errorPhoneNumber&&<p className="text-red-600">전화번호 입력이 잘못되었습니다!</p>}
                        
                        <label htmlFor="location" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">지역</label>
                        <input  type="text" name="location" placeholder="거주지역을 작성해 주세요"  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required value={location} onChange={onChangeLocation}/>
                        
                        <label htmlFor="intro" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">자기소개</label>
                        <input type="text" name="intro" placeholder="자기소개해주세요"  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required value={intro} onChange={onChangeIntro} />
                        
                        <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none" onClick={Regist}>
                            수정하기
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
}




export default MyProfile;