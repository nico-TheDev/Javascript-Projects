// Book constructor
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI Constructor
class UI {
    constructor() {}

    addBookToList(book) {
        const list = document.getElementById("book-list");
        // Create row
        const row = document.createElement("tr");
        //insert columns
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;

        list.appendChild(row);
    }

    deleteBook(target) {
        if (target.className === "delete") {
            target.parentNode.parentNode.remove();
        }
    }

    clearFields() {
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }

    showAlert(msg, type) {
        const message = document.createElement("p");
        message.appendChild(document.createTextNode(msg));
        message.className = `alert ${type}`;
        const container = document.querySelector(".container");
        const form = document.getElementById("add-book");

        container.insertBefore(message, form);

        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 3000);
    }
}

class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem("books") === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        }

        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem("books", JSON.stringify(books));
    }

    static displayBooks() {
        const books = Store.getBooks();

        books.forEach(book => {
            const ui = new UI();

            ui.addBookToList(book);
        });
    }

    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach((book,index) => {
            if(book.isbn === isbn){
                books.splice(index,1);
            }
        });

        localStorage.setItem("books", JSON.stringify(books));
        
    }
}

// DOM LOADED

document.addEventListener('DOMContentLoaded',Store.displayBooks);


// EVENT LISTENERS

document.getElementById("add-book").addEventListener("submit", (e) => {
    //Get form values
    const title = document.getElementById("title").value,
        author = document.getElementById("author").value,
        isbn = document.getElementById("isbn").value;
    //Instantiate a book
    const book = new Book(title, author, isbn);
    //Instantiate a new UI
    const ui = new UI();

    // FORM VALIDATION
    if (title === "" || author === "" || isbn === "") {
        ui.showAlert("Fill in the fields", "error");
    } else {
        ui.showAlert("Book Added", "success");
        ui.addBookToList(book);
        //add to LS
        Store.addBook(book);
        ui.clearFields();
    }

    console.log(book);
    e.preventDefault();
});

// DELETE

document.getElementById("book-list").addEventListener("click", (e) => {
    const ui = new UI();

    ui.deleteBook(e.target);
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    ui.showAlert("Book Deleted", "success");
    e.preventDefault();
});

