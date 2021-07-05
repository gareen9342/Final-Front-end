import React from "react";

const GroupStudy = (props) => {
    
    // 1. 이 페이지를 볼때 현재 유저가 그룹에 속해있는지 확인해야됨
    // 2. db에서 조회해서 데이터를 띄어줘야됨


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