import { ImCart } from "react-icons/im";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  let cantidad = cantidadTotal();

  return (
    <Link to="/cart" className="cartwidget">
      <div className="carrito">
      <ImCart
        className={cantidad === 0 ? "iconViolet" : "iconWhite"}
      />
      </div>
      <p>{cantidad > 0 && cantidad}</p>
    </Link>
  );
};

export default CartWidget;
