function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.getDetails = function () {
    return `${this.name} - $${this.price}, Quantity: ${this.quantity}`;
};

function Electronics(name, price, quantity, brand, model) {
    Product.call(this, name, price, quantity);
    this.brand = brand;
    this.model = model;
}

Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.constructor = Electronics;

Electronics.prototype.powerOn = function () {
    console.log(`${this.brand} ${this.model} is now powered ON.`);
};

Electronics.prototype.powerOff = function () {
    console.log(`${this.brand} ${this.model} is now powered OFF.`);
};

function Clothing(name, price, quantity, size, material) {
    Product.call(this, name, price, quantity); 
    this.size = size;
    this.material = material;
}

Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;

Clothing.prototype.getSize = function () {
    return `${this.name} is available in size ${this.size}.`;
};

function Books(name, price, quantity, author, genre) {
    Product.call(this, name, price, quantity); 
    this.author = author;
    this.genre = genre;
}

Books.prototype = Object.create(Product.prototype);
Books.prototype.constructor = Books;

Books.prototype.getSummary = function () {
    return `"${this.name}" by ${this.author} - Genre: ${this.genre}`;
};

const laptop = new Electronics("Laptop", 1200, 10, "Dell", "XPS 15");
const tshirt = new Clothing("T-Shirt", 25, 50, "L", "Cotton");
const book = new Books("JavaScript Guide", 40, 100, "John Doe", "Programming");

console.log(laptop.getDetails()); 
laptop.powerOn(); 

console.log(tshirt.getDetails());
console.log(tshirt.getSize()); 

console.log(book.getDetails()); 
console.log(book.getSummary()); 