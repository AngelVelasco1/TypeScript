//? Anotacion de tipo
let name1: string = "Juan";


//? Inferencia de tipo
const person = {
    name : 'juan',
    age : 28
}

//? Eliminar Tipado
let euler: any = 3.1785;
euler = "euler"

//? Functions (En las funciones typescript no es capáz de inferir su tipo, por lo que debes definirlo)
function sum(a: number, b: number) {
    return a + b
}
sum(5, 4);
sum("Hi", 2);

//? Tipar objetos
function sayHello({name, age}: {name: string, age: number}) {
    return `Hi ${name}, you're ${age}`
}

sayHello({name: "Juan", age: 5})

//? Tipar valores que retorna (Return)
function sayHi({name, age}: {name: string, age: number}): string {
    console.log(`Hi ${name}, you're ${age}`);
    return name;
}
console.log(sayHi({name: "Juan", age: 5})
);

//? Tipar funciones (Callbacks)
//? Void indica que no le importa lo que devuelve una funcion
const sayHiFromFun = (fn: (name: string, age: number) => void) => {
    fn("Juan", 25)
};
const sayHI = (name: string, age: number) => {
    console.log(`Hi ${name}, you're ${age}`);
}
sayHiFromFun(sayHI);


//? Tipar arrow functions

//? Never nos permite decir que una funcion NUNCA devolvera nada