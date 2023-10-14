let i = 0;

const func = () => {
  i++;
  func();
};

try {
  func();
} catch (e) {
  // Словили ошибку переполнения стэка и вывели значение счетчика в консоль
  console.log(i);
}
