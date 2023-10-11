const book = {
  name: "Harry Potter",
  author: "ASD",
  date: "123123,123",
};

Object.defineProperty(book, "show", {
  get() {
    console.log(
      `name: ${this.name}, author: ${this.author}, date: ${this.date} `
    );
  },
});

Object.defineProperty(book, "changeBook", {
  set(info) {
    const [name, author, date] = info;
    typeof name !== "undefined" ? (this.name = name) : (this.name = this.name);
    typeof author !== "undefined"
      ? (this.author = author)
      : (this.author = this.author);
    typeof date !== "undefined" ? (this.date = date) : (this.date = this.date);
  },
});

book.changeBook = ["asd", "234"];

book.show;
