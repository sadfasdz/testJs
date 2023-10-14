function isPalindrom(sentence) {
  const sentenceWithoutSpace = sentence.split(" ").join(""); //избавляемся от пробелов
  let start = 0;
  let end = sentenceWithoutSpace.length - 1;

  while (start < end) {
    const firstChar = sentenceWithoutSpace[start]; //первый символ
    const lastChar = sentenceWithoutSpace[end]; // последний символ
    if (firstChar.toLowerCase() !== lastChar.toLowerCase()) {
      return false; //если firstChar и  lastChar не равны возвращаем false
    }
    // иначе увеличиваем start на 1 и уменьшаем end на 1
    start++;
    end--;
  }
  return true;
}

console.log(isPalindrom("asddsa"));
