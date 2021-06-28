import axios from "axios";
import ApiService from "./.apiservice";

const StudyService = () => {};

StudyService.uploadStudy = (data) => {
  return ApiService.post("/study.do", data);
};

export default StudyService;
