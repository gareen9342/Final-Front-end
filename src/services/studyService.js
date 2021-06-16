import ApiService from "./.apiservice";

const StudyService = () => {};

StudyService.uploadStudy = (data) => {
  return ApiService.post("/study", data);
};
export default StudyService;
