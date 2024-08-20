const productos = [
  // Vinos Tintos
  {
    id: "malbecReserva",
    nombre: "Malbec Reserva - Bodega Norton",
    descripcion: "Vino de intenso color rojo violáceo. Aromas a frutas negras, como moras y ciruelas, con notas a vainilla y cacao. En boca es sedoso, con taninos redondos y un final largo.",
    categoria: "vinos",
    subcategoria: "tintos",
    precio: 120,
    stock: 15,
    imagen: "https://via.placeholder.com/150x200?text=Malbec+Reserva",
  },
  {
    id: "cabernetSauvignon",
    nombre: "Cabernet Sauvignon - Rutini",
    descripcion: "Vino con aromas intensos a frutos rojos y especias. En boca presenta una estructura elegante con taninos firmes y un final persistente.",
    categoria: "vinos",
    subcategoria: "tintos",
    precio: 150,
    stock: 10,
    imagen: "https://via.placeholder.com/150x200?text=Cabernet+Sauvignon",
  },
  {
    id: "blendPremium",
    nombre: "Blend Premium - Catena Zapata",
    descripcion: "Un corte de Malbec, Cabernet Sauvignon y Petit Verdot. Complejo, con aromas a frutos negros, chocolate y tabaco. Gran cuerpo y un final prolongado.",
    categoria: "vinos",
    subcategoria: "tintos",
    precio: 180,
    stock: 8,
    imagen: "https://via.placeholder.com/150x200?text=Blend+Premium",
  },
  {
    id: "pinotNoir",
    nombre: "Pinot Noir - Luigi Bosca",
    descripcion: "Elegante y suave, con notas a frutillas, cerezas y especias dulces. En boca es redondo, con un final aterciopelado.",
    categoria: "vinos",
    subcategoria: "tintos",
    precio: 160,
    stock: 12,
    imagen: "https://via.placeholder.com/150x200?text=Pinot+Noir",
  },

  // Vinos Blancos
  {
    id: "chardonnayAlta",
    nombre: "Chardonnay Alta - Catena Zapata",
    descripcion: "Vino de color dorado con reflejos verdosos. Aromas a frutas tropicales y manteca, con un toque de roble. En boca es fresco y con un final cremoso.",
    categoria: "vinos",
    subcategoria: "blancos",
    precio: 140,
    stock: 12,
    imagen: "https://via.placeholder.com/150x200?text=Chardonnay+Alta",
  },
  {
    id: "sauvignonBlanc",
    nombre: "Sauvignon Blanc - Andeluna",
    descripcion: "Aromas cítricos y herbales, con un paladar fresco y vibrante. Perfecto para maridar con pescados y mariscos.",
    categoria: "vinos",
    subcategoria: "blancos",
    precio: 110,
    stock: 20,
    imagen: "https://via.placeholder.com/150x200?text=Sauvignon+Blanc",
  },
  {
    id: "torronteSalta",
    nombre: "Torrontés - Bodega Colomé",
    descripcion: "De color amarillo pálido, con aromas florales y cítricos. En boca es fresco, ligero y aromático, con un final agradable.",
    categoria: "vinos",
    subcategoria: "blancos",
    precio: 130,
    stock: 18,
    imagen: "https://via.placeholder.com/150x200?text=Torront%C3%A9s",
  },

  // Espumantes
  {
    id: "espumanteBrut",
    nombre: "Espumante Brut - Chandon",
    descripcion: "Burbujeante y elegante. Aromas a manzana verde y cítricos, con un sabor equilibrado y un final fresco.",
    categoria: "vinos",
    subcategoria: "espumantes",
    precio: 130,
    stock: 25,
    imagen: "https://via.placeholder.com/150x200?text=Espumante+Brut",
  },
  {
    id: "espumanteRose",
    nombre: "Espumante Rosé - Chandon",
    descripcion: "Delicado color rosa con burbujas finas. Aromas a frutillas y cerezas, con un paladar fresco y vivaz.",
    categoria: "vinos",
    subcategoria: "espumantes",
    precio: 140,
    stock: 18,
    imagen: "https://via.placeholder.com/150x200?text=Espumante+Ros%C3%A9",
  },

  // Destilados
  {
    id: "whiskyJackDaniels",
    nombre: "Whisky Jack Daniel's",
    descripcion: "Whisky americano de Tennessee, con un perfil suave y ligeramente ahumado. Perfecto para disfrutar solo o en cócteles.",
    categoria: "destilados",
    precio: 250,
    stock: 10,
    imagen: "https://via.placeholder.com/150x200?text=Jack+Daniel's",
  },
  {
    id: "vodkaAbsolut",
    nombre: "Vodka Absolut",
    descripcion: "Vodka sueco puro y suave. Ideal para cócteles clásicos como el Bloody Mary o Vodka Tonic.",
    categoria: "destilados",
    precio: 200,
    stock: 30,
    imagen: "https://via.placeholder.com/150x200?text=Absolut+Vodka",
  },
  {
    id: "ginHendricks",
    nombre: "Gin Hendrick's",
    descripcion: "Gin escocés infusionado con pepino y pétalos de rosa. Fresco, floral y único en su sabor.",
    categoria: "destilados",
    precio: 300,
    stock: 15,
    imagen: "https://via.placeholder.com/150x200?text=Hendrick's+Gin",
  },

  // Regalería y Accesorios
  {
    id: "setVinoPremium",
    nombre: "Set de Vino Premium",
    descripcion: "Incluye sacacorchos profesional, cortador de cápsulas, anillo antigoteo y termómetro de vino. Todo en un elegante estuche de madera.",
    categoria: "regaleria",
    precio: 220,
    stock: 5,
    imagen: "https://via.placeholder.com/150x200?text=Set+de+Vino",
  },
  {
    id: "decantadorCristal",
    nombre: "Decantador de Cristal",
    descripcion: "Decantador de vidrio soplado, ideal para oxigenar vinos tintos y realzar sus aromas y sabores.",
    categoria: "regaleria",
    precio: 180,
    stock: 12,
    imagen: "https://via.placeholder.com/150x200?text=Decantador",
  },
  {
    id: "copasCristal",
    nombre: "Juego de Copas de Cristal",
    descripcion: "Set de 6 copas de cristal fino, diseñadas para vinos tintos, con un diseño elegante y sofisticado.",
    categoria: "regaleria",
    precio: 90,
    stock: 20,
    imagen: "https://via.placeholder.com/150x200?text=Copas+de+Cristal",
  },
];


const obtenerProductos = () => {
  return new Promise((resolve, reject) => {
    
    // retrasar base de datos
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export default obtenerProductos;