type HeroProperties = {
  name: string,
  address: {
    city: string,
    country: string
  }
}
const createHeroo = (hero: HeroProperties): HeroProperties => {
  const { name, address: { city, country } } = hero
  return {
    name,
    address: {
      city,
      country
    }
  }
}

const superman = createHeroo({
  name: "superman",
  address: {
    city: "Metropolis",
    country: "USA"
  }
});

const addressHero: HeroProperties['address'] = {
  city: 'Metallax',
  country: 'USA'
}

//? Type from value
const address = {
  city: 'Metropolis',
  country: 'USA'
}
type Address = typeof address;
const angelAddress: Address = {
  city: 'Bucaramanga',
  country: 'Colombia'
}

//? Type from function return
const createPokemon = (name: string, age: number) : { name: string, age: number } => {
  return {
    name,
    age
  }
}

type Pokemon =ReturnType<typeof createPokemon>;