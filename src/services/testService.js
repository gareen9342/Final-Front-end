import ApiService from "./.apiservice";
const TestService = () => {};

TestService.getTestPosts = () => {
  return ApiService.get("/");
};

TestService.postTestPosts = () => {
  return ApiService.post("/",{ 
      "ename" : "testname",
      "job" : "beaksoo", 
      "mgr" : "7698", 
      "sal" : "3000,00", 
      "comm":"300,00", 
      "deptno" : "10"
    });
};

export default TestService;
