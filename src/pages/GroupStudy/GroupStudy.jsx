import React , {useState, useEffect} from "react";
import groupStudyService from "../../services/groupStudyService";
import StudyIntroduce from "../../components/StudyIntroduce/StudyIntroduce";
import CalendarGroup from "../Calendar/CalendarGroup";
import MemberList from "../../components/MemberList/MemberList";

const GroupStudy = (props) => {
    
    // 1. 이 페이지를 볼때 현재 유저가 그룹에 속해있는지 확인해야됨
    // 2. db에서 조회해서 데이터를 띄어줘야됨

    const [role, setRole] = useState("");
    const email = window.localStorage.getItem("email");
    const studyId = props.location.state.studyId;

    

    useEffect(() => {
        (async () => {
            const res = await groupStudyService.getRole(email,studyId);
            console.log("작동",res.data);
            setRole(res.data);
        })();
      }, []);
    
    

    // 2. studyid 값으로 들어올때
    // props.location.state.studyId 스터디      => id 값
    // window.localStorage.getItem("email")    => user email값 을 받을 수 있음

    // 2-1. 회원일 경우 작성과 수정이 가능하게 하기
    // 2-2. 관리자일 경우 작성, 수정, 관리버튼 나오게하기
    // 2-3. 비회원일 경우 읽기 전용으로 들어가기, 가입신청하기 버튼 만들기
    // 2-3-1. 비공개일 경우 비공개 페이지입니다. 더이상 가입신청불가능


    return(
        <>
            {/* 스터디이름 */}
            스터디 이름 : {props.location.state.studyname}<br/>
            {/* 스터디 아이디 */}
            스터디 ID : {props.location.state.studyId}<br/>
            {/* 관리자여부 확인 true false 값으로 전달됨*/}
            관리자 여부 : {props.location.state.isAdmin&&<>관리자입니다.</>}<br/>

            {/* 관리하기 버튼 */}
            {role==="admin" ? <button
            className="inline-block px-6 py-2 font-medium leading-7 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
          >
            관리하기
          </button>: ""}


            {/* 가입신청하기 버튼 */}
            {role==="null" ? <button
            className="inline-block px-6 py-2 font-medium leading-7 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
            // onClick={groupStudyService.postStudySignIn()}
          >
            가입신청하기
          </button>: ""}
          
            {/* 가입신청 취소하기 버튼 */}
            {role==="wating" ? <button
            className="inline-block px-6 py-2 font-medium leading-7 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
            // onClick={groupStudyService.postStudySignOut()}
          >
            가입신청취소하기
          </button>: ""}
            {/* 회원일 경우 어서오세요 나오게하기 */}
            {role==="user" ? <h1>어서오세요</h1> : ""}
            <StudyIntroduce studyId={studyId} />
            <MemberList studyId={studyId}/>
            <CalendarGroup 
                studyGroupId={studyId}
                userEmail={window.localStorage.getItem("email")}
            />
        </>
    );
}

export default GroupStudy