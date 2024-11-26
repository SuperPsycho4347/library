// Variables
const bodyContainer = document.querySelector('.container')
const addBookDialog = document.querySelector('.add-book-dialog');
const addBookBtn = document.querySelector('#add-book')
const submitBtn = document.querySelector('.submit');
const cancelBtn = document.querySelector('.cancel');

// Functions
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function createBookCard(newBook , bookIndex) {
    const bookCard = document.createElement('div');
    const bookTitle = document.createElement('h2');
    bookTitle.classList.add('book-title');
    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('book-author');
    const bookPages = document.createElement('p');
    bookPages.classList.add('book-pages');
    const bookStatus = document.createElement('p')
    bookStatus.classList.add('book-status')

    bookTitle.textContent = `${newBook.title};`
    bookAuthor.textContent = `${newBook.author}`;
    bookPages.textContent = `${newBook.pages}`;
    bookStatus.textContent = `${newBook.status}`;

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookStatus);

    return bookCard;
}

function addBook(newBook) {
    const bookContainer = document.querySelector('.books-container');
    const bookIndex = myLibrary.indexOf(newBook);
    const newCard = createBookCard(newBook, bookIndex);
    bookContainer.appendChild(newCard);
}

function createLibrary() {
    const baseContainer = document.createElement('div');
    baseContainer.classList.add('books-container');
    
    myLibrary.forEach((myBook, bookIndex) => {
        const bookCard = createBookCard(myBook, bookIndex);
        baseContainer.appendChild(bookCard);
    })

    bodyContainer.appendChild(baseContainer);
}

// Execution
const myLibrary = [
];

// const books = document.querySelector('.books');
// const bookContainer = document.createElement('div');
// bookContainer.classList.add('book');
// const bookTitle = document.createElement('h2');
// bookTitle.textContent = myLibrary[0].title;
// bookContainer.appendChild(bookTitle);
// const bookAuthor = document.createElement('p');
// bookAuthor.textContent = myLibrary[0].author;
// bookContainer.appendChild(bookAuthor);
// const bookPages = document.createElement('p');
// bookPages.textContent = myLibrary[0].pages;
// bookContainer.appendChild(bookPages);
// const bookStatus =document.createElement('p');
// bookStatus.textContent = myLibrary[0].status;
// bookContainer.appendChild(bookStatus);
// books.appendChild(bookContainer);


createLibrary();

addBookBtn.addEventListener('click', () => {
    addBookDialog.showModal();
})

cancelBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addBookDialog.close();
})

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const titleInput = document.querySelector('#title').value;
    const authorInput = document.querySelector('#author').value;
    const pagesInput = document.querySelector('#pages').value;
    const statusInput = document.querySelector('#status').value;

    const newBook = new Book(titleInput, authorInput, pagesInput, statusInput);

    console.log('hell')
    myLibrary.push(newBook);

    addBook(newBook);

    addBookDialog.close();
})