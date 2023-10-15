const arrFunctions = [
  function one() {
    return "one";
  },
  function two() {
    return "two";
  },
  function tree() {
    return "tree";
  },
  function four() {
    return "four";
  },
  function five() {
    return "five";
  },
  function six() {
    return "six";
  },
];

function callFunctions(index) {
  if (index < arrFunctions.length) {
    console.log(`index = ${index}, value = ${arrFunctions[index]()}`);
    setTimeout(() => callFunctions(index + 1), 0); //Это позволяет вызвать следующую функцию только после завершения работы предыдущей функции.
  }
}

callFunctions(0);
