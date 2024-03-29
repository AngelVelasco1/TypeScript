//? Required Params
function addNumbersRequired(x: number, y: number): number {
    return x + y;
}

addNumbersRequired(1, 2); // Returns 3
addNumbersRequired(1);    // Returns an error

//? Opcional Params
function addNumbersOpcional(x: number, y?: number): number {
    if (y === undefined) {
        return x
    }
    return x + y;
}

addNumbersOpcional(1, 2); // Returns 3
addNumbersOpcional(1);    // Returns 1

//? Default Params
function addNumbersDefault(x: number, y = 2): number {
    return x + y;
}

addNumbersOpcional(1, 4); // Returns 5
addNumbersOpcional(1);    // Returns 3


//? REST Params (Params without limit)
let addNumbersInfinite = (firstNumber: number, ...restNumbers: number[]): number => {
    let total: number = firstNumber
    for(let i = 0; i < restNumbers.length; i++) {
        if(isNaN(restNumbers[i])) {
            continue
        }
        total += Number(restNumbers[i])
    }
    return total
}

addNumbersInfinite(5, 1, 5, 5, 10)

//? Desconstruct Object Params
interface Msg {
    email: string;
    text: string;
    destinatary: string;
}
function sendMessage ({email, text, destinatary}: Msg): string {
 alert(`Message from ${email} to ${destinatary}: ${text}`)
 return email
}
