import { useState, useEffect } from "react";
import obtenerProductos from "../../data/data.js";
import ItemList from "./ItemList"; 
import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos()
      .then((respuesta) => {
        setProductos(respuesta);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Finalizó la promesa");
      });
  }, []);

  console.log(productos);

  return (
    <div>
      <p>{saludo}</p>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
