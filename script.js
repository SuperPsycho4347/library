const myLibrary = [
    {title: "War And Peace", author: "Leo Tolstoy", pages: "1,225", status: "read"}
];

// const container = document.querySelector('container');
const books = document.querySelector('.books');
const bookContainer = document.createElement('div');
bookContainer.classList.add('book');
const bookTitle = document.createElement('h2');
bookTitle.textContent = myLibrary[0].title;
bookContainer.appendChild(bookTitle);
const bookAuthor = document.createElement('p');
bookAuthor.textContent = myLibrary[0].author;
bookContainer.appendChild(bookAuthor);
const bookPages = document.createElement('p');
bookPages.textContent = myLibrary[0].pages;
bookContainer.appendChild(bookPages);
const bookStatus =document.createElement('p');
bookStatus.textContent = myLibrary[0].status;
bookContainer.appendChild(bookStatus);
books.appendChild(bookContainer);

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBook() {
    
}