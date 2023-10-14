function getWordEnding(num) {
  const cases = [2, 0, 1, 1, 1, 2]; // значения для склонения слов в зависимости от числа

  // если при делении num на 100 в остатке будет иметь число >4 и <20 то index = 2 иначе числу из массива cases
  const index =
    num % 100 > 4 && num % 100 < 20 ? 2 : cases[Math.min(num % 10, 5)];
  return index;
}

function formatNumberWithEnding(num, wordForms) {
  const ending = getWordEnding(num);
  //возвращаем строку типа:'101 сообщение и др'
  return `${num} ${wordForms[ending]}`;
}

console.log(
  formatNumberWithEnding(101, ["сообщение", "сообщения", "сообщений"])
);

console.log(
  formatNumberWithEnding(101, ["пользователь", "пользователя", "пользователей"])
);
