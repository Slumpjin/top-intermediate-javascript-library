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

function addBookToLibrary() {
  // do stuff here
}
