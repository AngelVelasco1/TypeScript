//? Type
type calculator = (x: number, y: number) => number

//? Interface
interface Calculator {
    (x: number, y: number): number;
}

/* Example (Puede usarse alias tipos o interfaces para tipar funciones) */
let addNumbers: Calculator = (num1: number, num2: number) => {
    return num1 + num2
}
let substractNumbers: Calculator = (num1: number, num2: number) => {
    return num1 - num2
}

let doOperation = (operation: "add" | "substract"): Calculator => {
    if (operation === "add") {
        return addNumbers;
    } else {
        return substractNumbers
    }
}

doOperation("add")(5, 10)
doOperation("substract")(5, 10)