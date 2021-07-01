import { ContactSupportOutlined } from "@material-ui/icons";
import ApiService from "./.apiservice";

const CalendarService = () => {};

CalendarService.CalendarSelectList = () => {
  return ApiService.get("calendarSelectList.do");
};

CalendarService.CalendarInsert = (data) => {
  console.log("service : ", data);
  return ApiService.post("calendarInsert.do", data);
};

CalendarService.CalendarUpdate = (data) => {
  console.log("service : ", data);
  return ApiService.post("calendarUpdate.do", data);
};

CalendarService.CalendarDelete = (data) => {
  console.log("service : ", data);
  return ApiService.post("calendarDelete.do", data);
};

export default CalendarService;
