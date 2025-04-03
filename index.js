const bookId = document.getElementById("bookId");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookRead = document.getElementById("read");
const addBookForm = document.getElementById("form");

// buttons
const addBook = document.getElementById("add-book");
const addBookToLibrarybtn = document.getElementById("add-to-libray");

addBookForm.style.display = "none";
addBook.addEventListener("click", () => {
  addBookForm.style.display = "block";
});

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  const bookContainer = document.getElementById("book-container"); // Assuming you have a container to hold books

  // Create a new element for the new book
  const bookElement = document.createElement("div");
  bookElement.classList.add("book");

  // Add the book details to the new element
  bookElement.innerHTML = `
      <p>ID: ${crypto.randomUUID()}</p>
      <p>Title: ${book.title}</p>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read}</p>
    `;

  // Append the new book element to the container
  bookContainer.appendChild(bookElement);
}

addBookToLibrarybtn.addEventListener("click", (e) => {
  e.preventDefault();

  const titleInput = document.getElementById("add-title").value;
  const authorInput = document.getElementById("add-author").value;
  const pagesInput = document.getElementById("add-pages").value;
  const readInput = document.getElementById("add-read").value;

  let book1 = new Book(titleInput, authorInput, pagesInput, readInput);
  addBookToLibrary(book1);

  addBookForm.reset();

  addBookForm.style.display = "none";
});
