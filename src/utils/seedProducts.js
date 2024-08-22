import { addDoc, collection } from "firebase/firestore";

import db from "../db/db.js";

const productos = [
    // Vinos Tintos
    {
        id: "malbecReserva",
        nombre: "Malbec Reserva - Bodegas Norton",
        descripcion: "Es un vino de intenso color rojo violáceo. Aromas a frutas negras, como moras y ciruelas, con notas a vainilla y cacao. En boca es sedoso, con taninos redondos y un final largo.",
        categoria: "vinos",
        subcategoria: "tintos",
        precio: 12000,
        stock: 15,
        imagen: "https://images.vivino.com/thumbs/E2Tm1NJvQIGmRna7txNXPQ_pb_x600.png",
    },
    {
        id: "cabernetSauvignon",
        nombre: "Cabernet Sauvignon - Rutini",
        descripcion: "Vino con aromas intensos a frutos rojos y especias. En boca presenta una estructura elegante con taninos firmes y un final persistente.",
        categoria: "vinos",
        subcategoria: "tintos",
        precio: 15000,
        stock: 10,
        imagen: "https://www.espaciovino.com.ar/media/default/0001/63/thumb_62001_default_medium.jpeg",
    },
    {
        id: "blendPremium",
        nombre: "Blend Premium - Catena Zapata",
        descripcion: "Un corte de Malbec, Cabernet Sauvignon y Petit Verdot. Complejo, con aromas a frutos negros, chocolate y tabaco. Gran cuerpo y un final prolongado.",
        categoria: "vinos",
        subcategoria: "tintos",
        precio: 18000,
        stock: 8,
        imagen: "https://viners.com.ar/cdn/shop/products/catena-zapata-malbec-argentino-2017-vino-catena-zapata-990982.jpg?v=1598225488&width=1200",
    },
    {
        id: "pinotNoir",
        nombre: "Pinot Noir - Luigi Bosca",
        descripcion: "Elegante y suave, con notas a frutillas, cerezas y especias dulces. En boca es redondo, con un final aterciopelado.",
        categoria: "vinos",
        subcategoria: "tintos",
        precio: 16500,
        stock: 12,
        imagen: "https://www.espaciovino.com.ar/media/default/0001/54/thumb_53482_default_big.jpeg",
    },

    // Vinos Blancos
    {
        id: "chardonnayAlta",
        nombre: "Chardonnay Alta - Catena Zapata",
        descripcion: "Vino de color dorado con reflejos verdosos. Aromas a frutas tropicales y manteca, con un toque de roble. En boca es fresco y con un final cremoso.",
        categoria: "vinos",
        subcategoria: "blancos",
        precio: 14000,
        stock: 12,
        imagen: "https://viners.com.ar/cdn/shop/products/angelica-zapata-chardonnay-alta-2018-vino-catena-zapata-625426.jpg?v=1598225729&width=1000",
    },
    {
        id: "sauvignonBlanc",
        nombre: "Sauvignon Blanc - Andeluna",
        descripcion: "Aromas cítricos y herbales, con un paladar fresco y vibrante. Perfecto para maridar con pescados y mariscos.",
        categoria: "vinos",
        subcategoria: "blancos",
        precio: 11800,
        stock: 20,
        imagen: "https://vinotecaligier.com/media/catalog/product/cache/73269a27812eefec516431430aa0b457/b/e/be75129_base.jpg",
    },
    {
        id: "torronteSalta",
        nombre: "Torrontés - Bodega Colomé",
        descripcion: "De color amarillo pálido, con aromas florales y cítricos. En boca es fresco, ligero y aromático, con un final agradable.",
        categoria: "vinos",
        subcategoria: "blancos",
        precio: 15030,
        stock: 18,
        imagen: "https://www.bodegacolome.com/wp-content/uploads/2020/07/pro_torrontes.png",
    },

    // Espumantes
    {
        id: "espumanteBrut",
        nombre: "Espumante Brut - Chandon",
        descripcion: "Burbujeante y elegante. Aromas a manzana verde y cítricos, con un sabor equilibrado y un final fresco.",
        categoria: "vinos",
        subcategoria: "espumantes",
        precio: 13750,
        stock: 25,
        imagen: "https://www.alambique22.ar/147-large_default/espumante-chandon-extra-brut-750cc.jpg",
    },
    {
        id: "espumanteRose",
        nombre: "Espumante Rosé - Chandon",
        descripcion: "Delicado color rosa con burbujas finas. Aromas a frutillas y cerezas, con un paladar fresco y vivaz.",
        categoria: "vinos",
        subcategoria: "espumantes",
        precio: 14540,
        stock: 18,
        imagen: "https://www.espaciovino.com.ar/media/default/0001/64/thumb_63346_default_big.jpeg",
    },

    // Destilados
    {
        id: "whiskyJackDaniels",
        nombre: "Whisky Jack Daniel's",
        descripcion: "Whisky americano de Tennessee, con un perfil suave y ligeramente ahumado. Perfecto para disfrutar solo o en cócteles.",
        categoria: "destilados",
        precio: 15250,
        stock: 10,
        imagen: "https://acdn.mitiendanube.com/stores/001/211/660/products/jack-daniels-old-071-1e1cb312375b325f5716063985425824-480-0.webp",
    },
    {
        id: "vodkaAbsolut",
        nombre: "Vodka Absolut",
        descripcion: "Vodka sueco puro y suave. Ideal para cócteles clásicos como el Bloody Mary o Vodka Tonic.",
        categoria: "destilados",
        precio: 15200,
        stock: 30,
        imagen: "https://acdn.mitiendanube.com/stores/001/211/660/products/absolut-ok1-ee7230193fefdcc9c316517724474691-640-0.webp",
    },
    {
        id: "ginHendricks",
        nombre: "Gin Hendrick's",
        descripcion: "Gin escocés infusionado con pepino y pétalos de rosa. Fresco, floral y único en su sabor.",
        categoria: "destilados",
        precio: 15300,
        stock: 15,
        imagen: "https://acdn.mitiendanube.com/stores/001/211/660/products/hendricks1-6a678bb8a9af9ff42d16122797827156-480-0.webp",
    },

    // Regalería y Accesorios
    {
        id: "setVinoPremium",
        nombre: "Set de Vino Premium",
        descripcion: "Incluye sacacorchos profesional, cortador de cápsulas, anillo antigoteo y termómetro de vino. Todo en un elegante estuche de madera.",
        categoria: "regaleria",
        precio: 22000,
        stock: 5,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_918501-MLA72412785124_102023-O.webp",
    },
    {
        id: "decantadorCristal",
        nombre: "Decantador de Cristal",
        descripcion: "Decantador de vidrio soplado, ideal para oxigenar vinos tintos y realzar sus aromas y sabores.",
        categoria: "regaleria",
        precio: 39800,
        stock: 12,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_941551-MLA42962037623_072020-O.webp",
    },
    {
        id: "copasCristal",
        nombre: "Juego de Copas de Cristal",
        descripcion: "Set de 6 copas de cristal fino, diseñadas para vinos tintos, con un diseño elegante y sofisticado.",
        categoria: "regaleria",
        precio: 9000,
        stock: 20,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_647165-MLU73587103544_122023-O.webp",
    },
];

const seedProducts = () =>{
    productos.map (  ( { id, ...rest}) =>{
        const productosRef = collection(db, "productos")
        addDoc(productosRef, rest)
    } )

    console.log ("productos cargados correctamente")
}

seedProducts()