function Car(make, model, year, type, isAvailable = true) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.type = type; 
    this.isAvailable = isAvailable;
}

function Customer(name, isPremium = false) {
    this.name = name;
    this.rentedCars = [];
    this.isPremium = isPremium; 
}

Customer.prototype.rentCar = function (car) {
    if (car.isAvailable) {
        car.isAvailable = false;
        this.rentedCars.push(car);
        console.log(`${this.name} rented a ${car.make} ${car.model}.`);
    } else {
        console.log(`Sorry, ${car.make} ${car.model} is already rented.`);
    }
};

Customer.prototype.returnCar = function (car) {
    setTimeout(() => {
        car.isAvailable = true;
        this.rentedCars = this.rentedCars.filter(rentedCar => rentedCar !== car);
        console.log(`${this.name} returned the ${car.make} ${car.model}.`);
    }, 2000); 
};

function calculateRentalPrice(car, days, customer) {
    const baseRate = 50; 
    const typeRates = { SUV: 80, Sedan: 60, Hatchback: 40 };
    let rate = typeRates[car.type] || baseRate;

    if (customer.isPremium) {
        rate *= 0.9; 
    }
    return rate * days;
}

function Maintenance(car, delay) {
    console.log(` ${car.make} ${car.model} is under maintenance...`);
    setTimeout(() => {
        car.isAvailable = true;
        console.log(` ${car.make} ${car.model} is now available after maintenance.`);
    }, delay);
}

const car1 = new Car("Toyota", "Corolla", 2020, "Sedan");
const car2 = new Car("Ford", "Escape", 2022, "SUV");
const car3 = new Car("Honda", "Civic", 2021, "Hatchback");

const customer1 = new Customer("Alice"); 
const customer2 = new Customer("Bob", true); 

customer1.rentCar(car1);
customer2.rentCar(car1); 
const rentalCost = calculateRentalPrice(car1, 5, customer2);
console.log(`Rental cost for Bob: $${rentalCost}`);

customer1.returnCar(car1);

Maintenance(car2, 3000);

const rentCarForAlice = customer1.rentCar;
rentCarForAlice.call(customer1, car2); 
rentCarForAlice.apply(customer2, [car3]); 
const rentForBob = rentCarForAlice.bind(customer2, car1);
rentForBob(); 