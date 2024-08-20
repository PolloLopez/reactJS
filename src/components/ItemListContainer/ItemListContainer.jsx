import { useState, useEffect } from "react";
import ItemList from "./ItemList"; 
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import obtenerProductos from "../../data/data";
import { MoonLoader } from "react-spinners";


const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [estaCargando, setEstaCargando] = useState(false)
  const { idCategoria } = useParams();

  useEffect(() => {
    //mostrar pantalla de carga
    setEstaCargando(true)

    obtenerProductos()
      .then((respuesta) => {
        if (idCategoria) {
          // Filtra productos por categoría
          const productosFiltrados = respuesta.filter(producto => producto.categoria === idCategoria);
          setProductos(productosFiltrados);
        } else {
          // Guarda todos los productos
          setProductos(respuesta);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        //ocultamos pantalla de carga cuando finaliza la promesa
        setEstaCargando(false)
      });
  }, [idCategoria]);

  return (
    <div>
      <p className="saludo">{saludo}</p>
      {
        estaCargando ? <div> <MoonLoader /> </div> : <ItemList productos={productos} />}
    </div>
  );
};



export default ItemListContainer;
