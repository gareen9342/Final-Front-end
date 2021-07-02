import { ContactSupportOutlined } from "@material-ui/icons";
import ApiService from "./.apiservice";

const CalendarService = () => {};

CalendarService.CalendarSelectList = () => {
  return ApiService.get("calendarSelectList.do");
};

CalendarService.CalendarSelectMember = (data) => {
  return ApiService.post("calendarSelectMember.do", data);
};

CalendarService.CalendarInsert = (data) => {
  return ApiService.post("calendarInsert.do", data);
};

CalendarService.CalendarUpdate = (data) => {
  return ApiService.post("calendarUpdate.do", data);
};

CalendarService.CalendarDelete = (data) => {
  return ApiService.post("calendarDelete.do", data);
};

export default CalendarService;
