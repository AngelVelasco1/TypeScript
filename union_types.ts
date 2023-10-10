//? Basic example
let anything: number | string;
anything = 5;
anything = "hello";
/* anything = true */

//? Specific value
let number: 5 | string;
number = 5;
/* number = 6 */


type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// Template union types
type HeroPower = 'human' | 'superhuman' | 'godlike' | 'god' | 'legendary' | 'immortal';


type Hero = {
  readonly id?: HeroId
  name: string
  age: number
  isActive?: boolean // Optional propeties
  heroPower?: HeroPower
}


let hero: Hero = {
  name: "Flash",
  age: 35
}

function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true
  }
}
const thor = createHero({name: "Thor", age: 25 });
thor.heroPower = 'godlike';
