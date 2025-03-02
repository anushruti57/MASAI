// Book Constructor
function Book(title, author, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.isAvailable = isAvailable;
  }
  
  // Member Constructor
  function Member(name) {
    this.name = name;
    this.borrowedBooks = [];
  }
  
  // Borrow Book Method for Regular Members
  Member.prototype.borrowBook = function (book) {
    if (this.borrowedBooks.length >= 3) {
      console.log(`${this.name} cannot borrow more than 3 books.`);
      return;
    }
  
    if (book.isAvailable) {
      book.isAvailable = false;
      this.borrowedBooks.push(book.title);
      console.log(`${this.name} borrowed "${book.title}".`);
    } else {
      console.log(`"${book.title}" is already borrowed.`);
    }
  };
  
  // Premium Member Constructor (Inheriting from Member)
  function PremiumMember(name) {
    Member.call(this, name); // Call the Member constructor
    this.specialCollectionAccess = true;
  }
  
  // Inherit Member Prototype
  PremiumMember.prototype = Object.create(Member.prototype);
  PremiumMember.prototype.constructor = PremiumMember;
  
  // Overriding borrowBook Method for Premium Members
  PremiumMember.prototype.borrowBook = function (book) {
    if (this.borrowedBooks.length >= 5) {
      console.log(`${this.name} cannot borrow more than 5 books.`);
      return;
    }
  
    // Use call to invoke the original borrowBook method
    Member.prototype.borrowBook.call(this, book);
  };
  
  // Demonstration
  const book1 = new Book("The Hobbit", "J.R.R. Tolkien");
  const book2 = new Book("1984", "George Orwell");
  const book3 = new Book("To Kill a Mockingbird", "Harper Lee");
  const book4 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
  const book5 = new Book("Moby-Dick", "Herman Melville");
  const book6 = new Book("War and Peace", "Leo Tolstoy");
  
  const regularMember = new Member("Alice");
  const premiumMember = new PremiumMember("Bob");
  
  // Borrowing Books - Regular Member (Max 3)
  regularMember.borrowBook(book1);
  regularMember.borrowBook(book2);
  regularMember.borrowBook(book3);
  regularMember.borrowBook(book4); // Should not be allowed
  
  console.log(`${regularMember.name} borrowed books:`, regularMember.borrowedBooks);
  
  // Borrowing Books - Premium Member (Max 5)
  premiumMember.borrowBook(book4);
  premiumMember.borrowBook(book5);
  premiumMember.borrowBook(book6);
  premiumMember.borrowBook(book1); // Already borrowed by Alice, should not be allowed
  premiumMember.borrowBook(book2); // Already borrowed by Alice, should not be allowed
  
  console.log(`${premiumMember.name} borrowed books:`, premiumMember.borrowedBooks);
  
  // Using bind to create a bound function for borrowing books
  const borrowForAlice = regularMember.borrowBook.bind(regularMember, book4);
  borrowForAlice(); // Alice should be able to borrow this since she had reached her limit before
  
  console.log(`${regularMember.name} borrowed books after bind function:`, regularMember.borrowedBooks);
  