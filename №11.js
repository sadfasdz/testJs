// №11
function func() {
  let a = 1230;
  return function () {
    return a;
  };
}

let abc = func();

console.log(abc());
