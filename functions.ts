/* Name Function (We can call before declaration) */
add(1, 2) // --> Called before declaration
function add (n1: number, n2:number): number {
    return n1 + n2
}

/* Anonym function (Can't call before declatarion) */
const sum = function (n1: number, n2:number): number {
    return n1 + n2
}
sum(5, 6) // --> Only can called after declaration


//**  Example */
const multiply = function (numbers: number[]): number {
    let total: number = 1;
    for (let i = 0; i < numbers.length; i++) {
        if (isNaN(numbers[i])) {
            continue;
        }
        total = Number(numbers[i]) * total
    }
    return total
} // --> En este caso ocurre una inferencia de dato contextual, ya que la constante multiply no tiene especificado un tipo, typescript determina su tipo.

multiply([5, 20, 10])


/* Arrow Function */
const divide = (n1: number, n2: number): number => n1 / n2;

const divide2 = (numbers: number[]): number  => {
    let total: number = 1;
    for (let i = 0; i < numbers.length; i++) {
        if (isNaN(numbers[i])) {
            continue;
        }
        total = Number(numbers[i]) * total
    }
    return total
} 