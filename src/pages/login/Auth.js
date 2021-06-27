import axios from "axios";

const users = [
    {name : "pass" , email : "pass"},
];

export async function signIn(email ){
    // user.name 과 이메일을 받아옴
    // 유저의 DB에서 받아온다.
    let signUser;
    try{
        await axios.post('http://localhost:8787/swith/userSign.do',{
            email : email,
        })
    }catch{

    }

    
    // const user = users.find(
    //     (e) => e.email === email
    // );

    if(signUser){
        // 회원가입 페이지로 넘기기
        throw new Error();
    } 

    return signUser;
}