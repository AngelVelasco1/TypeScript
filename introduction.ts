//? Anotacion de tipo
let name1: string = "Juan";

//? Inferencia de tipo
const person = {
  name: "juan",
  age: 28,
};

//? Eliminar Tipado
let euler: any = 3.1785;
euler = "euler";

//? Functions (En las funciones typescript no es capáz de inferir su tipo, por lo que debes definirlo)
function summ(a: number, b: number) {
  return a + b;
}
summ(5, 4);

//? Tipar objetos
function sayHello({ name, age }: { name: string; age: number }) {
  return `Hi ${name}, you're ${age}`;
}

sayHello({ name: "Juan", age: 5 });

//? Tipar valores que retorna (Return)
function sayHi({ name, age }: { name: string; age: number }): string {
  console.log(`Hi ${name}, you're ${age}`);
  return name;
}
console.log(sayHi({ name: "Juan", age: 5 }));

//? Tipar funciones (Callbacks)
//? Void indica que no le importa lo que devuelve una funcion
const sayHiFromFun = (fn: (name: string, age: number) => void) => {
  fn("Juan", 25);
};
const sayHI = (name: string, age: number) => {
  console.log(`Hi ${name}, you're ${age}`);
};
sayHiFromFun(sayHI);

//? Tipar arrow functions
const sumNumbers = (a: number, b: number): number => {
  return a + b;
};

//? Never nos permite decir que una funcion NUNCA devolvera nada
function throwError(message: string): never {
  throw new Error(message);
}

//? Inferencia en funciones
const avengers = ["thor", "hulk", "ironman", "captain"];
avengers.map((avenger) => {
  console.log(avenger.toUpperCase());
});

//? Objetos (Type Alias)
/* type heroId = `${string}-${string}-${string}-${string}-${string}`; // Template union types
type Hero = {
  readonly id?: heroId
  name: string
  age: number
  isActive?: boolean // Optional propeties
}

let hero: Hero = {
  name: "Flash",
  age: 35
}

function createHero(hero: Hero): Hero {
  const { name, age, isActive } = hero;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive
  }
}
const thor = createHero({ name: "Thor", age: 25, isActive: true });
 */

