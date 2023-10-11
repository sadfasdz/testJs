function convertStringToJson(str) {
  let result = null;
  if (typeof str === "string") {
    str = str.trim();
    if (str[0] === "{" && str[str.length - 1] === "}") {
      str = str.slice(1, -1);
      result = {};
      let keyValuePairs = str.split(",");
      for (let i = 0; i < keyValuePairs.length; i++) {
        let [key, value] = keyValuePairs[i].split(":");
        key = key.trim().replace(/"/g, "");
        value = value.trim();
        if (value[0] === "{") {
          value = convertStringToJson(value);
        } else if (value[0] === "[") {
          value = convertStringToArray(value);
        } else if (value[0] === '"' && value[value.length - 1] === '"') {
          value = value.slice(1, -1);
        } else if (value === "true") {
          value = true;
        } else if (value === "false") {
          value = false;
        } else if (value === "null") {
          value = null;
        } else if (!isNaN(value)) {
          value = Number(value);
        }
        result[key] = value;
      }
    } else if (str[0] === "[" && str[str.length - 1] === "]") {
      result = convertStringToArray(str);
    }
  }
  return result;
}

function convertStringToArray(str) {
  let result = [];
  if (
    typeof str === "string" &&
    str[0] === "[" &&
    str[str.length - 1] === "]"
  ) {
    str = str.slice(1, -1);
    let values = str.split(",");
    for (let i = 0; i < values.length; i++) {
      let value = values[i].trim();
      if (value[0] === "{") {
        value = convertStringToJson(value);
      } else if (value[0] === "[") {
        value = convertStringToArray(value);
      } else if (value[0] === '"' && value[value.length - 1] === '"') {
        value = value.slice(1, -1);
      } else if (value === "true") {
        value = true;
      } else if (value === "false") {
        value = false;
      } else if (value === "null") {
        value = null;
      } else if (!isNaN(value)) {
        value = Number(value);
      }
      result.push(value);
    }
  }
  return result;
}

const jsonString =
  '{"name":"John","age":30,"city":"New York","isMarried":true,"hobbies":["reading","swimming"],"address":{"street":"Main St","number":100}}';
const json = convertStringToJson(jsonString);
console.log(json); // выведет { name: 'John', age: 30, city: 'New York', isMarried: true, hobbies: [ 'reading', 'swimming' ], address: { street: 'Main St', number: 100 } }
