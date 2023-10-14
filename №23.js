function passwordStrength(password) {
  let complexity = 0; // сложность пароля
  const regexLowercase = /[a-z]/; //регулярное выражение
  const regexUppercase = /[A-Z]/;
  const regexNumbers = /[0-9]/;
  const regexSymbols = /[$@!%*?&]/;

  if (password.length >= 8) {
    complexity += 1;
  }
  //если есть символ из регулярки , complexity + 1
  if (regexLowercase.test(password) && regexUppercase.test(password)) {
    complexity += 1;
  }
  if (regexNumbers.test(password)) {
    complexity += 1;
  }
  if (regexSymbols.test(password)) {
    complexity += 1;
  }

  switch (strength) {
    case 0:
    case 1:
      return "Слабый пароль.";
    case 2:
      return "Средний пароль.";
    case 3:
      return "Хороший пароль.";
    case 4:
      return "Отличный пароль!";
  }
}

console.log(passwordStrength("asda!sdqzxc213123zxcweASDASDqwe"));
