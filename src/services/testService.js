import ApiService from "./.apiservice";
const TestService = () => {};

TestService.getTestPosts = () => {
  return ApiService.get("/");
};

TestService.postTestPosts = () => {
  return ApiService.post("/",{"test": "1234"});
};

export default TestService;
