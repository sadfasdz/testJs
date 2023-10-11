function addEl() {
  const el = document.createElement("div");
  el.classList.add("inner");
  document.body.insertBefore(el, document.querySelector("script"));
}

addEl();
