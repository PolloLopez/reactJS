import ItemCount from "../ItemCount/ItemCount";
import "../ItemListContainer/ItemListContainer.css"
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {
  const { agregarProducto } = useContext(CartContext)
  const [mostrarItemCount, setMostrarItemCount] = useState(true)

  const agregarAlCarrito = (contador) => {
    const productoCarrito = { ...producto, cantidad: contador }

    agregarProducto(productoCarrito)
    //ocultamos itemcount
    setMostrarItemCount(false)
  }


  return (
    <div>
      <img className="imgProducto" src={producto.imagen} alt="" />
      <h2 className="tituloProducto">{producto.nombre}</h2>
      <p className="descripcionProducto">{producto.descripcion}</p>
      <p className="cantProductos">Precio: ${producto.precio}</p>
      {
        mostrarItemCount ? (<ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito} />

        ) : (
          <Link to="/cart" className="btn">Ir al carrito</Link>
        )}
    </div>
  );
};

export default ItemDetail;
