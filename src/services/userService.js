import ApiService from "./.apiservice";

const userService = () => {

};

userService.memberCheck = (data) => {
    return ApiService.post("MemberCheck.do", data);
};

export default userService;