import ApiService from "./.apiservice";
const TestService = () => {};

TestService.getTestPosts = () => {
  return ApiService.get("/posts");
};

export default TestService;
