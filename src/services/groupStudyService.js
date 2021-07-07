import ApiService from "./.apiservice";

const groupStudyService = () => {

};

groupStudyService.getRole = (email, studyId) => {
    const data = {
        email,
        studyId,
    }

    return ApiService.post("/groupstudy/groupStudySelectRole.do",data);
}

// 인트로 정보를 가지고 온다.
groupStudyService.getStudyIntro = (studyId) => {
    
    return ApiService.post("/groupstudy/studyIntroduceSelectOne.do",studyId);
}

// 멤버리스트에대한 정보를 가지고 온다.
groupStudyService.getStudyMemberList = (studyId) => {

    return ApiService.post("/groupstudy/groupStudygetList.do",studyId);
}

// 가입신청
groupStudyService.postStudySignIn = () => {

    return  ApiService.post("/groupstudy/groupStudySignIn.do",studyId);;
}

// 가입취소
groupStudyService.postStudySignOut = () => {

    return  ApiService.post("/groupstudy/groupStudySignOut.do",studyId);;
}

export default groupStudyService;