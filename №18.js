// try {
//   let data = "";
//   while (true) {
//     data += "a"; // добавление данных
//     localStorage.setItem("test", data); //добавляем data в localStorage
//   }
// } catch (error) {
//   console.log("Максимальный объем данных: " + data.length);
// }

//

navigator.storage.estimate().then(({ quota }) => {
  console.log(`Максимальный размер хранилища: ${quota} `);
});
