
type CharacterId = `${string}-${string}-${string}-${string}-${string}`;
type CharacterPower = 'human' | 'superhuman' | 'godlike' | 'god' | 'legendary' | 'immortal';



//? Intersection types
type CharacterBasicInfo = {
  readonly id?: CharacterId
  name: string
  age: number
}
type CharacterProperties = {
  isActive?: boolean // Optional propeties
  CharacterPower?: CharacterPower
}

type Character = CharacterBasicInfo & CharacterProperties


function createCharacter(input: CharacterBasicInfo): Character {
  const { id, name, age } = input;
  return {
    id,
    name,
    age,
    isActive: true
  }
}
const benedetta = createCharacter({id: crypto.randomUUID(), name: "Benedetta", age: 19 });
benedetta.CharacterPower = 'legendary';
