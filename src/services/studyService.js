import axios from "axios";
import ApiService from "./.apiservice";

const StudyService = () => { };

StudyService.uploadStudy = (data) => {
  return ApiService.post("/study.do", data);
};

StudyService.searchStudy = (lat, lng, dist) => {
  return ApiService.get(`/studylist.do?lat=${lat}&lng=${lng}&dist=${dist}`);
};

export default StudyService;
