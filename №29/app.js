const form = document.querySelector(".form");

function sendForm(e) {
  e.preventDefault();
  // console.log(form.elements);
  // const data = {};
  // // console.log(form.elements);
  // console.log(form);
  console.log(form);
  console.log(form.elements);
  let formData = new FormData(form);

  formData.append("asd", "zxc");
  console.log(formData);
  // ([
  //   (data.name, data.surname, data.date, data.asd, data.wqe)
  // ] = [
  //   form.elements.name.value,
  //   form.elements.surname.value,
  //   form.elements.date.value,
  //   form.elements.asd.value,
  //   form.elements.wqe.value,
  //   ]);

  // postData("", data).then((data) => {
  //   console.log(data);
  // });
}

form.addEventListener("submit", sendForm);

// const postData = async function (url = "", data) {
//   console.log(JSON.stringify(data));
//   const response = await fetch("", {
//     // Метод, если не указывать, будет использоваться GET
//     method: "POST",
//     // Заголовок запроса
//     headers: {
//       "Content-Type": "application/json",
//     },
//     // Данные
//     body: JSON.stringify(data),
//   });
//   // console.log(response.json());
//   let result =  response.json;
// return result
// };
