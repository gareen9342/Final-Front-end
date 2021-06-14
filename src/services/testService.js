import ApiService from "./.apiservice";
const TestService = () => {};

TestService.getTestPosts = () => {
  return ApiService.get("/selectlist.do");
};

TestService.postTestPosts = () => {
  return ApiService.post("/insert.do",{ 
      "ename" : "testname",
      "job" : "beaksoo", 
      "mgr" : "7698"
  });
};

export default TestService;
