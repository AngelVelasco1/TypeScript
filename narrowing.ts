//? Es el proceso de refinar el tipo de un dato. Es decir se usa para definir operaciones a variables que puedent tener multiples tipos. 

//* --> Basic example
function showLarge(obj: number | string) {
  if (typeof obj === "string") {
    return obj.length
  }
  return obj.toString().length
}
showLarge("hello")

//* --> Medium example
interface Mario {
  name: string,
  company: number,
  jump: () => void //--> Sin usar narrowing tendremos el problema de que tenemos metodos especificos que no se podran usar dependiendo del personaje
}
interface Sonic {
  name: string,
  company: number,
  run: () => void //-> Mario puede usar jump, pero Sonic solo run
}

type Character = Mario | Sonic

// --> Solucion con un type guard

const CheckIsSonic = (character: Character): character is Sonic  => {
  return (character as Sonic).run() !== undefined
}

const play = (character: Character): void =>  {
  if (CheckIsSonic(character)) {
    return character.run();
  }
  return character.jump()
}