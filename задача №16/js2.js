import { formatDate } from "./formData.js"; //импортируем функцию из formData.js

const date = new Date();
console.log(formatDate(date, "DD.MM.YYYY"));
