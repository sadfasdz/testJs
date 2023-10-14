function convertToJson(string) {
  // проверяем, что строка не пустая и не равна null
  if (!string || string === "null") {
    return null;
  }

  // удаляем пробелы в начале и конце строки
  string = string.trim();

  // проверяем, что строка начинается с '{' и заканчивается '}'
  if (string[0] !== "{" || string[string.length - 1] !== "}") {
    throw new Error("Invalid JSON string");
  }

  // удаляем '{' и '}' из строки
  string = string.slice(1, -1);

  // разбиваем строку на массив пар ключ-значение
  const pairs = string.split(",");

  // создаем объект для хранения пар ключ-значение
  const obj = {};

  // проходимся по каждой паре ключ-значение
  for (let pair of pairs) {
    // разбиваем пару на ключ и значение
    const [key, value] = pair.split(":");

    // удаляем пробелы в начале и конце ключа и значения
    const cleanKey = key.trim();
    const cleanValue = value.trim();

    // проверяем, что ключ начинается и заканчивается кавычками
    if (cleanKey[0] !== '"' || cleanKey[cleanKey.length - 1] !== '"') {
      throw new Error("Invalid JSON string");
    }

    // удаляем кавычки из ключа
    const keyWithoutQuotes = cleanKey.slice(1, -1);

    // проверяем, что значение начинается и заканчивается  кавычками
    if (cleanValue[0] !== '"' || cleanValue[cleanValue.length - 1] !== '"') {
      throw new Error("Invalid JSON string");
    }

    // удаляем кавычки из значения
    const valueWithoutQuotes = cleanValue.slice(1, -1);

    // добавляем пару ключ-значение в объект
    obj[keyWithoutQuotes] = isNaN(valueWithoutQuotes)
      ? valueWithoutQuotes
      : Number(valueWithoutQuotes);
  }

  return obj;
}

const jsonString = '{"name": "John", "age": "30"}';
console.log(convertToJson(jsonString));
