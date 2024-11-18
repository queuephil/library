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
    for(let i = 0; i < myLibrary.length; i++) {
        const book = document.createElement("div");
        book.classList = "book";
                
            const bookTitle = document.createElement("H2");
            const bookAuthor = document.createElement("div");
            const bookPages = document.createElement("div");
            const bookRead = document.createElement("div");
            const markReadButton = document.createElement("div");
            const removeBookButton = document.createElement("div");
            
            bookTitle.textContent = myLibrary[i].title;
            bookAuthor.textContent = `by ${myLibrary[i].author}`;
            bookPages.textContent = `${myLibrary[i].pages} pages`;
            bookRead.textContent = myLibrary[i].read;
            markReadButton.textContent = (myLibrary[i].read == "read") ? "Mark unread":"Mark read";
            markReadButton.classList = "button";
            removeBookButton.textContent = "Remove";
            removeBookButton.classList = "button";
            
            function appendChilds(parent) {
                parent.appendChild(bookTitle);
                parent.appendChild(bookAuthor);
                parent.appendChild(bookPages);
                parent.appendChild(bookRead);
                parent.appendChild(markReadButton);
                parent.appendChild(removeBookButton);
            }
            appendChilds(book);
            
            markReadButton.addEventListener("click", () => {
                (myLibrary[i].read == "read") ? myLibrary[i].read = "unread":myLibrary[i].read = "read";
                library.innerHTML = ""; // clear the library
                displayBooks(); // repopulate the library
            });

            removeBookButton.addEventListener("click", () => {
                console.log(i);
                myLibrary.splice(i, 1);
                library.innerHTML = ""; // clear the library
                displayBooks(); // repopulate the library
            });
        library.appendChild(book);
    }
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