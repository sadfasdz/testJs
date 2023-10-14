const inputMap = document.querySelector(".input-map");
const api = "https://geocode-maps.yandex.ru/1.x/";
const apiKey = "c5be2013-db4a-4591-bc0d-9855d0ce5159";
const stritsLIst = document.querySelector(".strits");
inputMap.addEventListener("input", getAddresses); // вешаем событие input

async function getAddresses() {
  stritsLIst.innerHTML = ""; // очищаем list
  const inputValue = inputMap.value;
  const response = await fetch(
    //делаем запрос на сервер
    `${api}?apikey=${apiKey}&geocode=${inputValue}&results=50&format=json`
  );
  const data = await response.json(); // преобразуем данные полученные от серверва в обычный формат

  for (let member of data.response.GeoObjectCollection.featureMember) {
    //проходимся по данным
    const li = document.createElement("li"); // создаем элемент li
    li.textContent = member.GeoObject.metaDataProperty.GeocoderMetaData.text; //
    li.addEventListener("click", function () {
      inputMap.value = this.textContent;
      stritsLIst.innerHTML = "";
    });
    stritsLIst.append(li);
  }
}
