const myLibrary = [];

function Book(title, author, numberOfPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.haveRead = haveRead;
    this.info = function() {
        return `${this.title} by ${this.author}, ${numberOfPages} pages, ${this.haveRead ? 'read' : 'not read yet'}`;
    }
}

myLibrary.push(new Book('Harry Potter', 'J.K. Rowling', 500, false));

const bookForm = document.querySelector('.book-form');
bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    // console.log(formProps);
    addBookToLibrary(formProps);
});

function addBookToLibrary(bookInfo) {
    const newBook = new Book(bookInfo.title, bookInfo.author, 
        Number(bookInfo.numberOfPages), Boolean(bookInfo.haveRead));
    myLibrary.push(newBook);
    // console.log(myLibrary)
}

