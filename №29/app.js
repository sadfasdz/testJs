const data = {};

const form = document.querySelector(".form");

form.addEventListener("input", function (e) {
  data[e.target.name] = e.target.value;
  console.log(JSON.stringify(data));
});

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  let response = await fetch("/article/formdata/post/user", {
    // метод запроса
    method: "POST",
    // Данные
    body: JSON.stringify(data),
  });

  let result = await response.json();
  console.log(result);
});
