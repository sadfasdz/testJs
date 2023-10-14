class Shape {
  squareTriangle() {
    return (this.h * this.a) / 2;
  }
  perimeterTriangle() {
    return this.a + this.b + this.c;
  }
  squareSquare() {
    return this.a * this.b;
  }
  perimeterSquare() {
    return (this.a + this.b) * 2;
  }
  squareСircle() {
    return Math.PI * this.r ** 2;
  }
  perimeterСircle() {
    return 2 * Math.PI * this.r;
  }
}

class Triangle extends Shape {
  constructor(a, b, c, h) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
    this.h = h;
  }
}

class Square extends Shape {
  constructor(a, b) {
    super();
    this.a = a;
    this.b = b;
  }
}

class Circle extends Shape {
  constructor(r) {
    super();
    this.r = r;
  }
}

let triangle = new Triangle(4, 5, 7, 4);

let square = new Square(4, 5);

let circle = new Circle(7);

console.log(triangle.squareTriangle());
console.log(triangle.perimeterTriangle());

console.log(square.squareSquare());
console.log(square.perimeterSquare());

console.log(circle.squareСircle());
console.log(circle.perimeterСircle());
