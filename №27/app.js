const main = document.querySelector(".main");

const elems = document.querySelectorAll(".elem");
const elem1 = document.querySelector(".elem");

main.addEventListener("mouseover", function () {
  elems.forEach((elem) => {
    if (elem.classList.contains("elem1")) {
      elem.style.transform = "translate(100% , 100%) rotate(235deg)";
      elem.style.backgroundColor = "blue";
    } else if (elem.classList.contains("elem2")) {
      elem.style.transform = "translate(-100% , 100%) rotate(235deg)";
      elem.style.backgroundColor = "green";
    } else if (elem.classList.contains("elem3")) {
      elem.style.transform = "translate(100% , -100%) rotate(235deg)";
      elem.style.backgroundColor = "yellow";
    } else if (elem.classList.contains("elem4")) {
      elem.style.transform = "translate(-100% , -100%) rotate(235deg)";
      elem.style.backgroundColor = "red";
    }
  });
  //
});

main.addEventListener("mouseout", function () {
  elems.forEach((elem) => {
    elem.style = "";
  });
});
