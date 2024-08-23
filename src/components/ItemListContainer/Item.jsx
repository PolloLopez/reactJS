import "./ItemListContainer.css";
import { BiLink } from "react-icons/bi";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="card">
      <div className="img-card">
        <img src={producto.imagen} alt={producto.titulo} />
      </div>
      <p className="tituloProducto">{producto.nombre}</p>
      <div className="detalles-container">
        <Link to={"/detalle/" + producto.id} className="detalles">
          {" "}
          <p>VER DETALLES</p>
        </Link>
      </div>
    </div>
  );
};

export default Item;
