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

function callFunctions(functions) {
  return function () {
    const arr = [];
    functions.forEach((func) => {
      arr.push(func());
    });
    return arr;
  };
}

const fanctions = callFunctions(arrFunctions);

console.log(fanctions());
