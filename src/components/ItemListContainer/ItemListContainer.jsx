import { useState, useEffect } from "react";
import obtenerProductos from "../../data/data.js";
import ItemList from "./ItemList"; 
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams()

  useEffect(() => {
    obtenerProductos()
      .then((respuesta) => {
      if(idCategoria){
        //filtra productos por categoria
        const productosFiltrados = respuesta.filter( (producto)=> producto.categoria === idCategoria)
        setProductos(productosFiltrados)
      } else {
        //guardamos todos los productos
        setProductos(respuesta);
      }
    })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Finalizó la promesa");
      });
  }, [idCategoria]);

  return (
    <div>
      <p>{saludo}</p>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
