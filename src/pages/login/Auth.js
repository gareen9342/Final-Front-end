const users = [
    {name : "pass" , email : "pass"},
];

export function signIn(email ){

    // user.name 과 이메일을 받아옴
    const user = users.find(
        (e) => e.email === email
    );
    // 유저의 DB에서 받아온다.
    console.log("user 의 정보", user);

    // DB에 데이터가 없을 경우 -> 회원가입 페이지로 넘겨버려야된다.
    if(user === undefined){
        throw new Error();
    } 

    return user;
}