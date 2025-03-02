// books.js
class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  
    getSummary() {
      return `${this.title} by ${this.author}, published in ${this.year}`;
    }
  }
  
  // Creating an array of book instances
  const books = [
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925),
    new Book("To Kill a Mockingbird", "Harper Lee", 1960),
    new Book("1984", "George Orwell", 1949),
    new Book("The Catcher in the Rye", "J.D. Salinger", 1951),
    new Book("Pride and Prejudice", "Jane Austen", 1813),
  ];
  
  // Exporting the books array
  module.exports = books;
  