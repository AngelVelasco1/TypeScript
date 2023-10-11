//? Tipar arrays
const languages: string[] = []
languages.push("Java")

//? Definir dos tipos de datos en un array
const all: (string | number)[] = []
all.push(2);
all.push("Juan")

//? Tipar con tipos definidos
type BasicInfo = {
  id?: number,
  name: string,
  age: number
}

const persons: BasicInfo[] = [] 