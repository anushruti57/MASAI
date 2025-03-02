// app.js
const books = require("./books");

// Using map to create an array of book summaries
const bookSummaries = books.map(book => book.getSummary());

// Logging the summaries to the console
console.log(bookSummaries);