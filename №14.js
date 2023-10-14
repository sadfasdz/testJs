const url = "https://api.thecatapi.com/v1/images/search";

function getData(urlApi) {
  new Promise((resolve, reject) => {
    const response = fetch(urlApi);
    resolve(response);
    reject("Error");
  })
    .then((resolve) => {
      return resolve.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

getData(url);
