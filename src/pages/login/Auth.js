import axios from "axios";

const users = [
    {name : "pass" , email : "pass"},
];

export async function signIn(email ){
    // user.name 과 이메일을 받아옴
    // 유저의 DB에서 받아온다.
    let signUser;

    try{
        const res = await axios.post('http://localhost:8787/swith/userSign.do',{
            email : email,
        })

        signUser = res.data;
        // 했을경우 =>  AAAAAAA@naver.com
        // 안했을 경우 => NotUser를 날려준다.

    }catch(err){
        console.error(err);
    }    

    return signInUser;

    
}