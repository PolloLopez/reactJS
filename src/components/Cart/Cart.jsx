import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../Cart/Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { carrito, precioTotal, borrarProducto, vaciarCarrito } =
    useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div>
        <h2 className="carritoVacio">No hay nada en el carrito! </h2>
        <Link to="/" className="btn">
          Volver a ver productos
        </Link>
      </div>
    );
  }

  return (
    <div>
      <ul className="carritoGeneral">
        {carrito.map((productoCarrito) => (
          <li className="carritoProducto" key={productoCarrito.id}>
            <img
              className="imagen"
              src={productoCarrito.imagen}
              alt={productoCarrito.nombre}
            />
            <div className="carritoItem">
              <p>{productoCarrito.nombre}</p>
              <p>Cantidad: {productoCarrito.cantidad}</p>
              <p>Precio c/u: $ {productoCarrito.precio}</p>
              <p>
                SubTotal: $ {productoCarrito.cantidad * productoCarrito.precio}
              </p>
              <button
                onClick={() => borrarProducto(productoCarrito.id)}
                className="btn quitar"
              >
                Quitar
              </button>
            </div>
          </li>
        ))}

        <h2 className="precioTotal">Precio Total: {precioTotal()}</h2>
        <button onClick={vaciarCarrito} className="btn">
          Vaciar Carrito
        </button>
        <Link to="/checkout" className="btn continua">
          Continuar compra
        </Link>
      </ul>
    </div>
  );
};

export default Cart;
