// №11
function func() {
  let a = 0;
  return function () {
    return a++;
  };
}

let abc = func();

console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());
