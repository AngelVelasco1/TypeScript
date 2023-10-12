const canvas = document.querySelector('span');

//? Usamos una asercion (instanceof) para validar si nuestra variable se refiere a un HTMLCanvasElement, si no lo es no generara ningun error; simplemente no se ejecuta.
if (canvas instanceof HTMLCanvasElement) { 
  // <--- No se ejecuta
  const context = canvas.getContext('2d'); 
  console.log(context); 
}