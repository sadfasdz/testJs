const body = document.querySelector("body");

traverseDOM(body, function (element) {
  console.log(element);
});

function traverseDOM(element, callback) {
  // Вызываем функцию обработки для текущего элемента
  callback(element);

  // Рекурсивно обходим дочерние узлы
  for (let i = 0; i < element.childNodes.length; i++) {
    const child = element.childNodes[i];
    // Проверяем, что узел является элементом HTML
    if (child.nodeType === Node.ELEMENT_NODE) {
      traverseDOM(child, callback);
    }
  }
}
