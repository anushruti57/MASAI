function car(make,model,year){
    return{
        make,
        model,
        year,
        describeCar(){
            console.log(`This car is a ${this.year} ${this.make} ${this.model}`)
        }

    }
}
const car1 = car("Toyota", "Camry", 2022);
car1.describeCar();
