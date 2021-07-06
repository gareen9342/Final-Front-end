import ApiService from "./.apiservice";

const StudyIntroduceService = () => {};

StudyIntroduceService.StudyIntroduceSelectOne = (data) => {
  return ApiService.post("studyIntroduceSelectOne.do", data);
};


export default StudyIntroduceService;
