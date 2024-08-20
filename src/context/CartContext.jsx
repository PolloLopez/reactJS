import { createContext, useState } from "react";

//creamos el contexto llamado CartContext
const CartContext = createContext()

//creamos un componente que sirve como proveedor del contexto
// el mismo envuelve los componentes que van a poder consumir la info del context
const CartProvider = ({  children }) => {
    const [carrito, setCarrito] =useState([]);

const agregarProducto = (productoNuevo) => {
    const condicion = estaEnElCarrito(productoNuevo.id)
        if(condicion){
            //sumar catidades
            let nuevoCarrito = [...carrito]
            nuevoCarrito.forEach((productoCarrito)=>{
                if(productoCarrito.id === productoNuevo.id){
                    productoCarrito.cantidad = productoCarrito.cantidad + productoNuevo.cantidad;
                }
            });

            setCarrito(nuevoCarrito)
        }else{
            //agregar el producto como nuevo 
            setCarrito([...carrito, productoNuevo])
        }
        //logica para sumar cantidades o agregar el producto como nuevo
    };

        //funcion para detectar si esl producto a añadir esta en el carrito o no
        const estaEnElCarrito = (idProducto) => {
            const condicional = carrito.some( (productoCarrito) => productoCarrito.id === idProducto)
            return condicional
        };


        
    const cantidadTotal = () => {
        const totalProductos = carrito.reduce( ( total, productoCarrito ) => total + productoCarrito.cantidad, 0)
        return totalProductos
    }

    const precioTotal = () => {
        const precio = carrito.reduce((total, productoCarrito) => total + (productoCarrito.cantidad * productoCarrito.precio), 0)
        return precio
    }

    const borrarProducto = (idProducto) => {
        const productosFiltrados = carrito.filter((productoCarrito) => productoCarrito.id !== idProducto)
        setCarrito(productosFiltrados)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    console.log(carrito)

    return (
        <CartContext.Provider value= {{ carrito, agregarProducto, cantidadTotal, precioTotal, borrarProducto, vaciarCarrito }} >
            {children}
        </CartContext.Provider>
    );
};


export { CartProvider, CartContext }
