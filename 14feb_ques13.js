function processProducts(products) {
    const productNames = products.map(product => product.name.toLowerCase());
    products.forEach(product => {
      const status = product.price > 50 ? "above" : "below";
      console.log(`${product.name.toLowerCase()} is ${status} $50`);
    });
  
    return productNames;
  }
  
  const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 }
  ];
  
  const names = processProducts(products);
  
  console.log(names);
  