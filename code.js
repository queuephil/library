const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary("Harry Potter and the Philosopher's Stone", "	J. K. Rowling", 310, "not read yet");
addBookToLibrary("Harry Potter and the Chamber of Secrets", "	J. K. Rowling", 341, "not read yet");
addBookToLibrary("Harry Potter and the Prisoner of Azkaban", "	J. K. Rowling", 435, "not read yet");


console.log(myLibrary); 