const myLibrary = [];

function Book(title, author, numberOfPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.haveRead = haveRead;
}

myLibrary.push(new Book('Harry Potter', 'J.K. Rowling', 500, false));

const bookForm = document.querySelector('.book-form');
const tableBody = document.querySelector('.table-body');
myLibrary.forEach(book => {
    addBookToTable(book);
});

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    addBookToLibrary(formProps);
});

function addBookToLibrary(bookInfo) {
    const newBook = new Book(bookInfo.title, bookInfo.author, 
    Number(bookInfo.numberOfPages), Boolean(bookInfo.haveRead));
    addBookToTable(newBook);
    myLibrary.push(newBook);
}
    
function addBookToTable(book) {
    const tableRow = document.createElement('tr');
    Object.values(book).forEach(value => {
        const tableData = document.createElement('td');
        tableData.innerText = value;
        tableRow.appendChild(tableData);
    });
    tableBody.appendChild(tableRow);
}
