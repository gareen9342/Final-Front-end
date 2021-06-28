import ApiService from "/src/services/.apiservice";
const TestService = () => {};

TestService.insert = (paymentInfo) => {
    return ApiService.post("/paymentInsert.do", paymentInfo);
};


// TestService.postTestPosts = () => {
//     return ApiService.post("/insert.do",{
//         "ename" : "testname",
//         "job" : "beaksoo",
//         "mgr" : "7698"
//     });
// };

export default TestService;
