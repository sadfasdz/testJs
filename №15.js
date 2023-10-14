const url = "https://api.thecatapi.com/v1/images/search";
async function getData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  console.log(data);
  return data;
}

getData(url);
