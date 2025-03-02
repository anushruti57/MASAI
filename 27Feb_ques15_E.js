function createLibrary() {
    return {
        books: [],

        addBook: function (book) {
            this.books.push(book);
        },

        removeBook: function (title) {
            this.books = this.books.filter(book => book.title !== title);
        },

        listBooks: function () {
            this.books.forEach(book => {
                console.log(`Title: ${book.title}, Author: ${book.author}`);
            });
        }
    };
}

function Book(title, author) {
    return {
        title: title,
        author: author
    };
}

const library = createLibrary();

const book1 = Book("To Kill a Mockingbird", "Harper Lee");
const book2 = Book("1984", "George Orwell");

library.addBook(book1);
library.addBook(book2);

library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee
// Title: 1984, Author: George Orwell

library.removeBook("1984");
library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee
