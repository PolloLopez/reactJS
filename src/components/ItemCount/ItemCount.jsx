import { useState } from "react"
import "../ItemListContainer/ItemListContainer.css"

const ItemCount = ({ stock, agregarAlCarrito }) => {
    const [count, setCount] = useState(1)

    const aumentar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const disminuir = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div className="contador">
            <button className="btnCount" onClick={disminuir} >-</button>
            <p>{count}</p>
            <button  className="btnCount" onClick={aumentar} >+</button>

            <button className="btnAgregarCount" onClick={() => agregarAlCarrito(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount