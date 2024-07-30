import { BiLink } from "react-icons/bi";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return (
        <div style={{margin:"0 100px"}}>
            <img width={300} src={producto.imagen} alt={producto.titulo} />
            <p>{producto.nombre}</p>
            <Link to={"/detalle/" + producto.id }>Ver detalles</Link>
        </div>
    );
};

export default Item;