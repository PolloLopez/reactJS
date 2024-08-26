import { ImCart } from "react-icons/im";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  let cantidad = cantidadTotal();

  return (
    <Link to="/cart" className="cartwidget">
      <ImCart
        size={40}
        className={cantidad === 0 ? "iconViolet" : "iconWhite"}
      />
      <p>{cantidad > 0 && cantidad}</p>
    </Link>
  );
};

export default CartWidget;
