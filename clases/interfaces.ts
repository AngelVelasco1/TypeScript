interface Vehicle {
    brand: string;
    color: string;
    model: string;
    doors: number;
    accelerate: (speed: number) => string
    turn: (direction: "left" | "right") => string
}

class Car2 implements Vehicle {
    /* Properties */
    private _brand: string;
    private _color: string;
    private readonly _model: string;
    private _doors: number;
    private static numberOfCars: number = 0;

    /* Constructor */
    constructor(brand: string, color: string, model: string, doors: number = 4) {
        this._brand = brand;
        this._color = color;
        if ((doors % 2) === 0) { /* Valida a doors en su inizializacion (Cuando se crea un nuevo objeto) */
            this._doors = doors
        } else {
            throw new Error("Doors must be an even number")
        }
        this._model = model;
        Car2.numberOfCars++;
    }
    /* Accesors (Must be named equal to constructor params) */
    get brand(): string {
        return this._brand
    }
    set brand(brand: string) {
        this._brand = brand
    }

    get color(): string {
        return `The car color is ${this._color}`
    }
    set color(color: string) {
        this._color = color
    }

    get model(): string {
        return `The car model is ${this.model}`
    }

    get doors() {
        return this._doors
    }
    set doors(doors: number) {
        if ((doors % 2) === 0) { /* Valida doors solo cuando se reasinga su valor */
            this._doors = doors
        } else {
            throw new Error("Doors must be an even number")
        }
    }
    /* Methods */
    accelerate(speed: number): string {
        return `${this.getBrand()} accelerates ${speed} KM/H`
    }
    turn(direction: 'left' | 'right'): string {
        return `${this.getBrand()} is turning ${direction}`

    }
    public static getNumberOfCars(): number {
        return Car2.numberOfCars;
    }
    protected getBrand(): string {
        return this._brand
    }
}

class ElectricCar2 extends Car {
    private _range: number;
    constructor(brand: string, color: string, model: string, range: number, doors: number = 2) {
        super(brand, color, model, doors)
        this._range = range

    }

    get Range() { // Devuelvo el valor de range
        return this._range
    }
    set Range(newRange: number) { // Metodo para actualizar el valor de range
        this._range = newRange
    }

    charge(): string {
        return `${this.getBrand()} is charging`
    }
}


interface Dog {
    id?: number;
    name: string;
    age: number;
    description: string;
}
class DogRecord implements Dog {
    id: number;
    name: string;
    age: number;
    description: string;

    constructor({ name, age, description, id = 0 }: Dog) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }

    static load(id: number): DogRecord {
        // code to load dog from database
        return dog;
    }

    save() {
        // code to save dog to database
    }
}
let dog = new DogRecord({id:1, name:"Pepe", age: 12, description: "Is a dog"})