/* Sintaxis de un generico */
function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(5) // Nice
numberArray.push("Kufra") // Error: Only allow numbers

let stringArray = getArray<string>(["Benedetta", "Arlot", "X-borg"])
numberArray.push("Harith") // Nice
numberArray.push(5) // Error: Only allow strings

/* Generico como interfaz */
interface Identity<V, M> {
    value: V;
    message: M;
}
let stringMessage: Identity<number, string> = {
    value: 25,
    message: "Hi"
}

let numberMessage: Identity<string, number> = {
    value: "Don't matter",
    message: 25
}

/* Generico como interfaz de tipo funcion */
interface ProcessIdentity<V, M> {
    (value: V, message: M): V
}
function validateIdentity<V, M>(value: V, message: M): V {
    console.log(message)
    return value
}

let processor: ProcessIdentity<number, string> = validateIdentity;
let returnNumber = processor(10, "Hi"); // Nice
let returnString = processor("jhi", 20) // The function must return a number

/* Generico como interfaz de tipo clase */
interface ProcessIdentityClass<V, M> {
    value: V;
    message: M;
    process(): V;
}

class CreateIdentity<V, M> implements ProcessIdentityClass<V, M> {
    value: V;
    message: M;
    constructor(value: V, message: M) {
        this.value = value
        this.message = message
    }
    process(): V {
        return this.value
    }
}

let processorClass = new CreateIdentity<string, number>("Value", 100)
processorClass.process()
processorClass.value = "Other value";
