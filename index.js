
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


  bookElement.innerHTML = `
  <div class="card" id=${crypto.randomUUID()}>
  <div class="card-details">
  <p class="text-title">${book.title}</p>
  <p class="text-body">${book.author}</p>
  <p class="text-body">${book.pages} pages</p>
  <p class="text-body">${book.read ? "True" : "False"}</p>
  </div>
<button class="card-button">Delete</button>
  </div>
    `;
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

const closeFormBtn = document.querySelector(".button-log");

closeFormBtn.addEventListener("click", () => {
  addBookForm.style.display = "none";
});

const deleteBookBtn = document.querySelector(".card-button");

deleteBookBtn.addEventListener("click", () => {
  
});
