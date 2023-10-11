function convertToJsonString(obj) {
  // Проверяем тип объекта
  if (typeof obj === "object") {
    // Обрабатываем массивы
    if (Array.isArray(obj)) {
      let result = "[";
      for (let i = 0; i < obj.length; i++) {
        result += convertToJsonString(obj[i]);
        if (i < obj.length - 1) {
          result += ",";
        }
      }
      result += "]";
      return result;
    }

    // Обрабатываем объекты
    let result = "{";
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = obj[key];

      result += `"${key}":${convertToJsonString(value)}`;

      if (i < keys.length - 1) {
        result += ",";
      }
    }
    result += "}";
    return result;
  }

  // Обрабатываем примитивные значения
  if (typeof obj === "string") {
    return `"${obj}"`;
  } else {
    return obj;
  }
}

// Пример использования:
let data = {
  name: "John",
  age: 30,
  hobbies: ["football", "programming"],
  address: { city: "New York", country: "USA" },
};

console.log(convertToJsonString(data));
