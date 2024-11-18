// create an array for the library
const myLibrary = [];

// create the Book-Object
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// add new Book-Object to the library-array
function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

// display the books of the library in the HTML
const library = document.querySelector(".library");
function displayBooks() {
    library.innerHTML = ""; // clear the library
    myLibrary.forEach((bookData, index) => {
        const book = document.createElement("div");
        book.classList.add("book");
    
        const elements = [
            { tag: "h2", text: bookData.title },
            { tag: "div", text: `by ${bookData.author}` },
            { tag: "div", text: `${bookData.pages} pages` },
            { tag: "div", text: bookData.read },
            { tag: "div", className: "markReadButton", text: bookData.read === "read" ? "Mark unread" : "Mark read" },
            { tag: "div", className: "removeBookButton", text: "Remove" },
        ];
    
        elements.forEach(({ tag, className, text }) => {
            const element = document.createElement(tag);
            element.textContent = text;
    
            if (className) element.classList.add(className);
    
            if (className === "markReadButton") {
                element.addEventListener("click", () => {
                    bookData.read = bookData.read === "read" ? "unread" : "read";
                    displayBooks();
                });
            }
    
            if (className === "removeBookButton") {
                element.addEventListener("click", () => {
                    myLibrary.splice(index, 1);
                    displayBooks();
                });
            }
    
            book.appendChild(element);
        });
    
        library.appendChild(book);
    });    
}    
    
// add a button to add a book
const addBookButton = document.querySelector(".addBookButton");
addBookButton.addEventListener("click", (event) => {
    
    const newTitle = document.getElementById("title").value;
    const newAuthor = document.getElementById("author").value;
    const newPages = document.getElementById("pages").value;
    const newRead = document.querySelector('input[name="read"]:checked').value;
    
    addBookToLibrary(newTitle, newAuthor, newPages, newRead);
    event.preventDefault();
    library.innerHTML = ""; // clear the library
    displayBooks(); // repopulate the library
})

// add some example books
addBookToLibrary("Harry Potter and the Philosopher's Stone", "	J. K. Rowling", 310, "read");
addBookToLibrary("Harry Potter and the Chamber of Secrets", "	J. K. Rowling", 341, "unread");
addBookToLibrary("Harry Potter and the Prisoner of Azkaban", "	J. K. Rowling", 435, "unread");

displayBooks();