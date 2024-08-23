import React, { useState } from "react";
import Swal from "sweetalert2";
import "../ItemListContainer/ItemListContainer.css";

const ItemCount = ({ stock, agregarAlCarrito }) => {
  const [count, setCount] = useState(1);

  const aumentar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const disminuir = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(count);
    Swal.fire({
      title: "¡Agregado al carrito!",
      text: `Agregaste ${count} producto(s) al carrito`,
      icon: "success",
      confirmButtonText: "Ok",
    });
  };

  return (
    <div className="contador">
      <button className="btnCount" onClick={disminuir}>
        -
      </button>
      <p>{count}</p>
      <button className="btnCount" onClick={aumentar}>
        +
      </button>

      <button className="btnAgregarCount" onClick={handleAgregarAlCarrito}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
