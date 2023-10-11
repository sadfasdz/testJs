//№1- ok
// function isPalindrom(sentence) {
//   const sentenceWithoutSpace = sentence.split(" ").join(""); //избавляемся от пробелов
//   let start = 0;
//   let end = sentenceWithoutSpace.length - 1;

//   while (start < end) {
//     const firstChar = sentenceWithoutSpace[start]; //первый символ
//     const lastChar = sentenceWithoutSpace[end]; // последний символ
//     if (firstChar.toLowerCase() !== lastChar.toLowerCase()) {
//       return false; //если firstChar и  lastChar не равны возвращаем false
//     }
// // иначе увеличиваем start на 1 и уменьшаем end на 1
//     start++;
//     end--;
//   }
//   return true; // возвращаем true
// }

// console.log(isPalindrom("asddsa"));

// function isStrangeNumber(num) {
//   let sum = 0;
//   for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//       sum += i;
//     }
//   }
//   return sum === num;
// }

// console.log(isStrangeNumber(70)); // true
// console.log(isStrangeNumber(12)); // false
// console.log(isStrangeNumber(28)); // true

// №10
//

// №14
// const body = document.querySelector("body");

// const url = "https://api.thecatapi.com/v1/images/search";

// function img(urlApi) {
//   new Promise((resolve, reject) => {
//     const img = fetch(url);
//     resolve(img);
//     reject("Error");
//   })
//     .then((resolve) => {
//       return resolve.json();
//     })
//     .then((data) => {
//       let img = document.createElement("img");
//       img.src = data.url;
//       body.append(img);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// (img(url));

// №15

// const body = document.querySelector("body");

// const url = "https://api.thecatapi.com/v1/images/search";
// async function img(urlApi) {
//   let response = await fetch(urlApi);
//   let data = await response.json();
//   let img = document.createElement("img");
//   img.src = data[0].url;
//   body.append(img);
// }

// img(url);

// №24
