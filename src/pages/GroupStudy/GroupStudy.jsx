import React from "react";

const GroupStudy = (props) => {
    
    // 1. 이 페이지를 볼때 현재 유저가 그룹에 속해있는지 확인해야됨
    // 2. db에서 조회해서 데이터를 띄어줘야됨

    // 1. 가린누나한테 studyid도 값 넘겨달라고 하기

    // 2. studyid 값으로 들어올때
    // 2-1. 비회원일 경우 읽기 전용으로 들어가기, 가입신청하기 버튼 만들기

    // 2-1-1. 비공개일 경우 비공개 페이지입니다. 더이상 가입신청불가능

    // 2-2. 회원일 경우 작성과 수정이 가능하게 하기
    // 2-3. 관리자일 경우 작성, 수정, 관리버튼 나오게하기
    
    //

    return(
        <>
            {console.log(props.location.state.studyname)}
            {props.location.state.studyname}
            <br/>
            {props.location.state.isAdmin}
        </>
    );
}

export default GroupStudy