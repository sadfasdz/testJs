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

arrFunctions.forEach((value, index) => {
  console.log(`index = ${index}, value = ${value()}`);
});
