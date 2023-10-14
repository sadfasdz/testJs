import moment from "moment";//импортируем 

export function formatDate(date, format) {   //export`ируем функцию
  return moment(date).format(format);
}
