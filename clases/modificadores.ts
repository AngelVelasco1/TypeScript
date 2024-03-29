class Avenger {
  public readonly name: string; // <-- Solo lectura (No puede reasignarse)
  private power: number; // <-- Propiedad privada
  protected battles: number = 0; // <-- Propiedad protegida

  constructor(name: string, power: number, battles: number = 0) { // <-- Constructor (Inicializa los valores)
    this.name = name;
    this.power = power;
    this.battles = battles
  }

  get info() { // <-- Descriptor de accesso get
    return `${this.name} has ${this.power} power`;
  }

  set updatePower(newPower: number) { // <-- Descriptor de acceso set
    if (newPower >= 100) {
      this.power = newPower;
    } else {
      throw new Error("Power must be greater than 100 to be updated");
    }
  }
}

const spiderman = new Avenger("Spiderman", 120, 3)
spiderman.updatePower = 150;
console.log(spiderman.info);

//? Implementar interfaces
interface JusticeLeague {
  name: string
  power: number
  battles: number
}

class JusticeCharacter implements JusticeLeague {
  name: string;
  power: number;
  battles: number;
  constructor(name: string, power: number) {
    this.name = name;
    this.power = power;
  }

  get info() {
    return `${this.name} has ${this.power} power`;
  }

  set updatePower(newPower: number) {
    if (newPower >= 100) {
      this.power = newPower;
    } else {
      throw new Error("Power must be greater than 100 to be updated");
    }
  }
}
const batman = new JusticeCharacter("batman", 120)

/* Invalidacion de un metodo */
class Animals {
  public name: string;
  protected type: string;
  public size: string;

  constructor(name: string, type: string, size: string) {
    this.name = name;
    this.type = type;
    this.size = size
  }

  breath() {
    return `${this.name} is breathing using his nose`;
  }
}

class AquaticAnimal extends Animals {
  constructor(name: string, type: string, size: string) {
    super(name, type, size)
  }
  breath() { // --> Invalidacion de un metodo (Estoy sobrescribiendo un metodo de la clase padre)
    return `${this.name} is breathing using his fins`;
  }
}
