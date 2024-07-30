const productos = [
    {
      id:"corderoConPielLobo",
      nombre:"Cordero con piel de lobo - Cavernet Franc",
      descripcion:"el que nunca falla",
      categoria: "vinos",
      precio: 100,
      stock: 12,
      imagen:"https://acdn.mitiendanube.com/stores/002/262/464/products/cplcabsauvignonx611-df420050c4edade1db16611845770956-1024-1024.webp",
    },
    {
      id:"perroCallejero",
      nombre:"Perro Callejero - Malbec",
      descripcion:"No falla y te hace quedar de 10",
      categoria: "vinos",
      precio: 100,
      stock: 8,
      imagen:"https://acdn.mitiendanube.com/stores/002/262/464/products/pcmalbecx61-ce7a3fa707be55239416674918419673-1024-1024.webp",
    },
    {
      id:"blueLabel700",
      nombre:"El verdadero elixir",
      descripcion:"Johnnie Walker Blue Label establece un estándar con capas de sabor y barricas seleccionadas a mano de todas las regiones de destilación de Escocia. Sus aromas son influenciados por el humo del oeste y los ricos whiskies del este.",
      categoria: "destilados",
      precio: 300,
      stock: 4,
      imagen:"https://http2.mlstatic.com/D_NQ_NP_860995-MLU75051137870_032024-O.webp",
    },
    {
      id:"sacacorcho2mov",
      nombre:"Sacacorchos dos movimientos",
      descripcion:"Doble Función: Este saca corcho no solo te ayuda a descorchar tus botellas de vino con facilidad, sino que también cuenta con un destapador de botellas integrado, ¡perfecto para abrir tus bebidas favoritas! Diseño Compacto: Con medidas de 12.5 x 2.2 cm, es lo suficientemente compacto para guardar en tu cocina o llevar contigo a cualquier reunión.Color Negro: Su elegante color negro agrega un toque de sofisticación a tu colección de utensilios de cocina o bar.",
      categoria: "regaleria",
      precio: 140,
      stock: 2,
      imagen:"https://http2.mlstatic.com/D_NQ_NP_898862-MLA75230784710_032024-O.webp",
    }
  ]

  const obtenerProductos =() => {
    return new Promise( (resolve, reject) => {
      //simulamos un retraso de red
      setTimeout( () => {
          resolve(productos)
      }, 2000);
    });
  };

  export default obtenerProductos
