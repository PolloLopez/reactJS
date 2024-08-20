import { useState, useEffect } from "react";
import obtenerProductos from "../../data/data.js";
import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";
import "../ItemListContainer/ItemListContainer.css"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { idProducto } = useParams();

    useEffect(() => {
        obtenerProductos()
            .then((data) => {
                const productoEncontrado = data.find((productoData) => productoData.id === idProducto);
                setProducto(productoEncontrado);
            })
            .catch((error) => {
                console.error("Error al obtener los productos:", error);
            });
    }, [idProducto]);

    if (!producto) {
        return <div className="cargando">Cargando...</div>;
    }

    return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
