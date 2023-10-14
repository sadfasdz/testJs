const arrFunctions = [
  function one() {
    setTimeout(() => {
      return 1;
    }, 0);
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
  new Promise((resolve) => {
    resolve(value);
  })
    .then((func) => {
      console.log(func);
      return func();
    })
    .then((data) => {
      console.log(data);
      console.log(`index = ${index}, value = ${data}`);
    });
});
