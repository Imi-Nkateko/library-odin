const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let book1 = new Book("Rich dad, Poor Dad", "Robert Kiyosaki", 200, true);

function addBookToLibrary(book) {
  myLibrary.push(book);
  myLibrary.map((item) => {
    console.log(item.title);
  });
  return console.log(myLibrary);
}

addBookToLibrary(book1);
