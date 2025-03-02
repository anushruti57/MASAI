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

function createInventoryItem(name, category, price) {
    return {
        name,
        category,
        price,
        describeItem: function() {
            console.log(`Item: ${this.name}, Category: ${this.category}, Price: ${this.price}`);
        }
    };
}

function addItemDiscount(inventoryItem, discountPercent) {
    return {
        ...inventoryItem,
        applyDiscount: function() {
            const discountedPrice = this.price - (this.price * discountPercent / 100);
            console.log(`Discounted Price for ${this.name}: ${discountedPrice}`);
        }
    };
}

const item = createInventoryItem("Laptop", "Electronics", 1500);
item.describeItem();

const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();

function timer(duration, onComplete) {
    setTimeout(() => {
        onComplete(`Timer of ${duration} ms finished`);
    }, duration);
}


timer(2000, (message) => {
    console.log(message);
});

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Fetched data successfully!");
            } else {
                reject("Error fetching data");
            }
        }, 1000);
    });
}

async function fetchDataHandler() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

fetchDataHandler();