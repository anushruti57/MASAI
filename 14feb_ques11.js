function outerFunction() {
    let message = "Hello World!";
    
    return function innerFunction() {
      console.log(message);
    };
  }

  const c = outerFunction(); 
  c();
  