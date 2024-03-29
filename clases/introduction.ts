class Car {
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
        Car.numberOfCars++;
    }
    /* Accesors */
    get Brand(): string {
        return this._brand
    }
    set Brand(brand: string) {
        this._brand = brand
    }

    get Color(): string {
        return `The car color is ${this._color}`
    }
    set Color(color: string) {
        this._color = color
    }

    get Doors() {
        return this._doors
    }
    set Doors(doors: number) {
        if ((doors % 2) === 0) { /* Valida doors solo cuando se reasinga su valor */
            this._doors = doors
        } else {
            throw new Error("Doors must be an even number")
        }
    }
    /* Methods */
    accelerate(speed: number) {
        return `${this.getBrand()} accelerates ${speed} KM/H`
    }
    turn(direction: 'left' | 'right'): string {
        return `${this.getBrand()} is turning ${direction}`

    }
    public static getNumberOfCars(): number {
        return Car.numberOfCars;
    }
    protected getBrand(): string {
        return this._brand
    }
}

class ElectricCar extends Car {
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


let myCar1 = new Car("BMW", "Red", "2024", 4);
let myCar2 = new Car('Galaxy Motors', "2023", 'red', 4);
let myCar3 = new Car('Galaxy Motors', 'red', "2023"); /* Omitimos la propiedad door, ya que es opcional y tiene un valor por default */