class Shape {
  constructor(a, b, c, h, P) {
    this.a = a;
    this.b = b;
    this.h = h;
  }
}

class Tri extends Shape {
  square() {
    return (this.h * this.a) / 2;
  }
}

class Square extends Shape {
  square() {
    return this.a * this.b;
  }
}

let tri = new Tri((a = 4), (h = 5));

let dva = new Square((a = 4), (b = 5));
// console.log(dva);
// console.log(dva.square());

console.log(dva.square());
console.log(tri.square());
