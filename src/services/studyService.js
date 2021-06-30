import axios from "axios";
import ApiService from "./.apiservice";

const StudyService = () => { };

StudyService.uploadStudy = (data) => {
  return ApiService.post("/study.do", data);
};

StudyService.searchStudy = (lat, lng) => {
  return ApiService.get(`/searchstudy.do?lat=${lat}?lng=${lng}`)
};

export default StudyService;
