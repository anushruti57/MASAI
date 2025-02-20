function Person(name, age) {
    this.name = name;
    this.age = age;

    this.displayInfo = function () {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
}

const person1 = new Person("Alice", 25);

const DisplayInfo = person1.displayInfo.bind(person1);

DisplayInfo();

