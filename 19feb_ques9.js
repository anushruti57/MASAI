function greet() {
    console.log(`Hello, ${this.name}`);
}

function setTimeoutGreeting(person) {
    const boundGreet = greet.bind(person); 
    setTimeout(boundGreet, 1000);
}

const person = { name: "Alice" };
setTimeoutGreeting(person);

