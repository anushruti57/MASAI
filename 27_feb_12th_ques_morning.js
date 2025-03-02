function createCar(make, model, year) {
    return {
        make: make,
        model: model,
        year: year,
        describeCar: function() {
            console.log(`This car is a ${this.year} ${this.make} ${this.model}.`);
        }
    };
}

const car = createCar("Toyota", "Camry", 2022);
car.describeCar(); 

function timer(duration, onComplete) {
    setTimeout(() => {
        onComplete(`Timer of ${duration} ms finished`);
    }, duration);
}

timer(2000, (message) => {
    console.log(message);
});