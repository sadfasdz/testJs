// №5
function creationLinerList(json) {
  const data = JSON.parse(json); // парсим JSON в массив объектов
  let obj = null; // начало списка

  // // перебираем массив объектов и создаем узлы списка
  for (let i = data.length - 1; i >= 0; i--) {
    const node = {
      id: data[i].id,
      name: data[i].name,
      age: data[i].age,
      email: data[i].email,
      next: obj, // следующий узел - текущее начало списка
    };
    obj = node; // перезаписываем начало списка
  }

  return obj; // возвращаем начало списка
}

console.log(
  creationLinerList(
    JSON.stringify([
      {
        id: 1,
        name: "John",
        age: 30,
        email: "john@example.com",
      },
      {
        id: 2,
        name: "Jane",
        age: 25,
        email: "jane@example.com",
      },
      {
        id: 3,
        name: "Bob",
        age: 40,
        email: "bob@example.com",
      },
    ])
  )
);
