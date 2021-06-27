import userService from "../../services/userService";

export async function signIn(email){
    // user.name 과 이메일을 받아옴
    // 유저의 DB에서 받아온다.
    if(email == "pass"){
        return email;
    }
    let signUser;
    signUser = await userService.memberCheck({email})
    console.log("받아온데이터의 값 : " + signUser.data);
    // 했을경우 =>  AAAAAAA@naver.com
    // 안했을 경우 => NotUser를 날려준다.
    return signUser.data;
}