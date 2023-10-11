let arr = [
  { name: "aohn", age: 25 },
  { name: "sdohn", age: 22 },
  { name: "John", age: 21 },
  { name: "xcohn", age: 23 },
  { name: "ghohn", age: 25 },
];
let arr2 = arr.sort((a, b) => {
  if (a.age != b.age) {
    return a.age - b.age;
  } else {
    return a.name.localeCompare(b.name);
  }
});

console.log(arr2);
