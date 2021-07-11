import ApiService from "./.apiservice";

const userService = () => {

};

userService.memberCheck = (data) => {
    return ApiService.post("MemberCheck.do", data);
};

userService.memberInsert = (data) => {
    return ApiService.post("MemberInsert.do", data);
}

userService.premiumCheck = (data) => {
    return ApiService.post("/payment/premiumCheck.do?email="+data.email);
}

userService.memberUpdate = (data) => {
    return ApiService.post("MyProfile.do", data);
}

export default userService;