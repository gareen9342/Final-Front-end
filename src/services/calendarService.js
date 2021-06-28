import ApiService from "./.apiservice";

const CalendarService = () => {};

CalendarService.CalendarSelectList = () => {
  return ApiService.get("calendarSelectList.do");
};

CalendarService.CalendarInsert = (data) => {
  return ApiService.post("calendarInsert.do", data);
};

export default CalendarService;
