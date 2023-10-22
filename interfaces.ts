//? Las interfaces ayudan a tipar igual que los types, pero las interfaces esperan objetos. Los tipos pueden esperar cualquier tipo primitivo (Array, string, cadenas, etc)

// --> Usa types al trabajar con todo
// --> Usa interfaces al trabajar preferiblemente con objetos

interface Product {
  name: string;
  price: number;
  discount?: number;
  quantity: number;
}

interface shoppingCart  {
  totalPrice: number,
  products: Product[]
}

const cart: shoppingCart = {
  totalPrice: 0,
  products: [
    {
      name: 'phone',
      price: 100,
      discount: 10,
      quantity: 1,
    },
    {
      name: 'laptop',
      price: 200,
      quantity: 1
    }
  ]
}

//? Extend interfaces 
interface T_shirt extends Product {
  size: string,
  color: string
  type: string
}

//? Las interfaces se puede repetir, los tipos no, esta seria una desventaja en algunos contextos
interface clothesCart {
  totalPrice: number;
  products: T_shirt[];
}

interface clothesCart {
  totalPrice: number;
  products: T_shirt[];
  
}

const clothes: clothesCart = {
  totalPrice: 0,
  products: [
    {
      name: "Montecarlo t-shirt",
      price: 100,
      discount: 10,
      quantity: 5,
      size: "M",
      color: "black",
      type: "t-shirt"
    }
  ]
}




clothes.products.forEach(product => {
  const price = product.price - (product.discount || 0);
  const total = price * product.quantity;
  clothes.totalPrice += total;
})
console.log(clothes.totalPrice);

 