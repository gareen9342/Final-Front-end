import ApiService from "./.apiservice";

const groupStudyService = () => {

};

groupStudyService.getRole = (email, studyId) => {
    return ApiService.get("groupStudySelectRole.do", email, studyId);
}

export default groupStudyService;