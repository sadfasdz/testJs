const inputMap = document.querySelector(".input-map");
const api = "https://geocode-maps.yandex.ru/1.x/";
const apiKey = "c5be2013-db4a-4591-bc0d-9855d0ce5159";
const stritsLIst = document.querySelector(".strits");
inputMap.addEventListener("input", getAddresses);

async function getAddresses() {
  stritsLIst.innerHTML = "";
  const inputValue = inputMap.value;
  const response = await fetch(
    `${api}?apikey=${apiKey}&geocode=${inputValue}&results=50&format=json`
  );
  console.log(inputValue);

  console.log(response);
  const data = await response.json();
  console.log(data);

  for (let member of data.response.GeoObjectCollection.featureMember) {
    const li = document.createElement("li");
    li.textContent = member.GeoObject.metaDataProperty.GeocoderMetaData.text;
    li.addEventListener("click", function () {
      inputMap.value = this.textContent;
      stritsLIst.innerHTML = "";
    });
    stritsLIst.append(li);
  }
}
