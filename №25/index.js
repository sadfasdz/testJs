function addEl() {
  const wrapper = document.querySelector(".wrapper");
  const el = document.createElement("div");
  el.classList.add("inner");

  // document.body.insertBefore(el, document.querySelector("script"));
  wrapper.append(el);
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", addEl);
