const users = [
    {name : "박창희" , email: "arrans9591@gmail.com"},
    {name : "pass" , email : "pass"},
];

export function signIn( name, email ){

    // user.name 과 이메일을 받아옴
    const user = users.find(
        // DB와 통신후  결과 값 비교해볼 것

        
        (e) => e.name === name && e.email === email
    );
    // 유저의 DB에서 받아온다.
    console.log("user 의 정보", user);

    // DB에 데이터가 없을 경우 -> 회원가입 페이지로 넘겨버려야된다.
    if(user === undefined){
        throw new Error();
    } 

    return user;
}