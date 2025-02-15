const cart = {
    items: [],
  
    addItem(name, price) {
      if (!name || typeof price !== "number" || isNaN(price) || price <= 0) {
        console.log("Invalid item. Please provide a valid name and a numeric price.");
        return;
      }
      this.items.push({ name, price });
      console.log(`Added: "${name}" - $${price.toFixed(2)}`);
    },
    getTotal() {
      return this.items.reduce((total, item) => total + item.price, 0).toFixed(2);
    },
  
    printCart() {
      if (this.items.length === 0) {
        console.log("Your cart is empty.");
        return;
      }
  
      console.log("Cart Summary:");
      this.items.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - $${item.price.toFixed(2)}`);
      });
      console.log(`Total: $${this.getTotal()}`);
    }
  };
  

  cart.addItem("Laptop", 899.99); 
  cart.addItem("Headphones", "50"); 
  cart.addItem("Mouse", 29.99);
  cart.addItem("", 100); 
  cart.addItem("Keyboard", -10); 
  cart.printCart();
  