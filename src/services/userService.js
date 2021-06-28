import ApiService from "./.apiservice";

const userService = () => {

};

userService.memberCheck = (data) => {
    return ApiService.post("MemberCheck.do", data);
};

userService.memberInsert = (data) => {
    return ApiService.post("MemberInsert.do", data);
}

export default userService;