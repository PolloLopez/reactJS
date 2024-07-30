const productos = [
    {
      id:"corderoConPielLobo",
      nombre:"Cordero con piel de lobo",
      descripcion:"el que nunca falla",
      categoria: "Cavernet Sauvignon",
      precio: 100,
      stock: 12,
      imagen:"https://acdn.mitiendanube.com/stores/002/262/464/products/cplcabsauvignonx611-df420050c4edade1db16611845770956-1024-1024.webp",
    },
    {
      id:"perroCallejero",
      nombre:"Perro Callejero",
      descripcion:"No falla y te hace quedar de 10",
      categoria: "MAlbec",
      precio: 100,
      stock: 8,
      imagen:"https://acdn.mitiendanube.com/stores/002/262/464/products/pcmalbecx61-ce7a3fa707be55239416674918419673-1024-1024.webp",
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
