import ApiService from "/src/services/.apiservice";
const TestService = () => {};


TestService.getTestPosts = () => {
    return ApiService.get("/shinyongcard.do");
};
TestService.getTestPosts = () => {
    return ApiService.get("/gyejwaech.do");
};
TestService.getTestPosts = () => {
    return ApiService.get("/mutongjang.do");
};
TestService.getTestPosts = () => {
    return ApiService.get("/kakaopay.do");
};
TestService.getTestPosts = () => {
    return ApiService.get("/naverpay.do");
};
TestService.getTestPosts = () => {
    return ApiService.get("/payco.do");
};


// TestService.postTestPosts = () => {
//     return ApiService.post("/insert.do",{
//         "ename" : "testname",
//         "job" : "beaksoo",
//         "mgr" : "7698"
//     });
// };

export default TestService;
