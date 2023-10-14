class Book {
  //создаем класс Book
  constructor(name, author, date) {
    this.name = name;
    this.author = author;
    this.date = date;
  }
  changeBook(...info) {
    // создаем метод changeBook
    const [name, author, date] = info;
    typeof name !== "undefined" ? (this.name = name) : (this.name = this.name);
    typeof author !== "undefined"
      ? (this.author = author)
      : (this.author = this.author);
    typeof date !== "undefined" ? (this.date = date) : (this.date = this.date);
  }
  show() {
    console.log(
      `name: ${this.name}, author: ${this.author}, date: ${this.date} `
    );
  }
}

const book = new Book("Harry Potter", "J.K. Rowling", "1997"); // создаем объект book при помощи класса

book.show();

book.changeBook("The Shining", "S.E. King", "1997");

book.show();
