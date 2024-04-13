const myLibrary = [];

function Book(title, author, numberOfPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.haveRead = haveRead;
}

myLibrary.push(new Book('Harry Potter', 'J.K. Rowling', 500, false));

const dialog = document.querySelector('dialog');
const bookForm = document.querySelector('.book-form');
const tableBody = document.querySelector('.table-body');
const addBookButton = document.querySelector('.add-book-button');
const cancelButton = document.querySelector('.cancel');

myLibrary.forEach(book => {
    addBookToTable(book);
});

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    addBookToLibrary(formProps);
    bookForm.reset();
    dialog.close();
});

addBookButton.addEventListener('click', () => {
    dialog.showModal();
});

cancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    bookForm.reset();
    dialog.close();
})

function addBookToLibrary(bookInfo) {
    const newBook = new Book(bookInfo.title, bookInfo.author, 
    Number(bookInfo.numberOfPages), Boolean(bookInfo.haveRead));
    addBookToTable(newBook);
    myLibrary.push(newBook);
}
    
function addBookToTable(book) {
    const tableRow = document.createElement('tr');
    for (key in book) {
        const tableData = document.createElement('td');
        if (key === 'haveRead') {
            tableData.addEventListener('click', (e) => {
                tableData.innerText = book[key] = !book[key];
                const bookIndex = myLibrary.indexOf(book);
                book[bookIndex] = book;
            })
        }
        tableData.innerText = book[key];
        tableRow.appendChild(tableData);
    }

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', (e) => {
        e.target.parentNode.remove();
        const deletedBookIndex = myLibrary.indexOf(book);
        myLibrary.splice(deletedBookIndex, 1);
        console.log(myLibrary);
    })

    tableRow.appendChild(deleteButton);
    tableBody.appendChild(tableRow);
}
