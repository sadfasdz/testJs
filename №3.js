const MathX = (function () {
  function isSimple(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  return {
    fibonachi(n) {
      if (n < 2) {
        return n;
      }
      let a = 0;
      let b = 1;
      for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
      }
      return b;
    },

    fibonachiAllNum(n) {
      let a = 0;
      let b = 1;
      const arrFibonachi = [a];
      while (b < n) {
        arrFibonachi.push(b);
        let c = a + b;
        a = b;
        b = c;
      }
      return arrFibonachi;
    },

    simpleNum(n) {
      let count = 0;
      let num = 2;
      while (count < n) {
        if (isSimple(num)) {
          count++;
        }
        num++;
      }
      return num - 1;
    },

    AllSimpleNum(n) {
      let count = 0;
      let num = 2;
      const arrSimpleNums = [];
      while (count < n) {
        if (isSimple(num)) {
          count++;
          arrSimpleNums.push(num);
        }
        num++;
      }
      return arrSimpleNums;
    },
  };
})();

console.log(MathX.AllSimpleNum(10));
console.log(MathX.simpleNum(10));
console.log(MathX.fibonachiAllNum(10));
console.log(MathX.fibonachi(10));
