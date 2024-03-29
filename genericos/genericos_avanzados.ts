class Car {
    make: string = "Generic Car"
    doors: number = 4
}
class ElectricCar extends Car {
    make: string = "Electric Car"
    doors: number = 4
}

class Truck extends Car {
    make: string = "Truck"
    doors: number = 2
}

function accelerate<C extends Car> (car: C): C {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`)
    return car
}

let electricCar1 = new ElectricCar;
accelerate<ElectricCar>(electricCar1)

let truck1 = new Truck;
accelerate<Truck>(truck1)