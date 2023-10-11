// №2
function isStrangeNumber(num) {
  let dividersSum = 0; //сумма делителей

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      //если число при делении на i в остатке дает 0, к сумме прибавляется данное число
      dividersSum += i;
    }
  }
  // возвращает tru eссли  сумма равна числу и false если не равна
  return dividersSum === num;
}

console.log(isStrangeNumber(12));
