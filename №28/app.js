const wrapper = document.querySelector(".wrapper");
const template = document.querySelector(".template");

const clone = template.content.cloneNode(true);
let div = clone.querySelectorAll("div");
div[0].textContent = 123;
wrapper.append(clone);

const clone2 = template.content.cloneNode(true);
div = clone2.querySelectorAll("div");
div[0].textContent = "321";
wrapper.append(clone2);
