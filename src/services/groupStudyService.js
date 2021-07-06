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

export default groupStudyService;