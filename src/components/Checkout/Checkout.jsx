import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import FormularioCheckout from './FormularioCheckout';
import db from '../../db/db.js';

const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: '',
        telefono: '',
        email: '',
    });
    const [idOrden, setIdorden] = useState(null);
    const { carrito, precioTotal } = useContext(CartContext);

    const handleChangeInput = (event) => {
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value })
    };

    const handleSubmitForm = (event) => {
        event.preventDefault();
        //formatear correctamente la info de orden a subir
        const orden = {
            comprador: { ...datosForm },
            productos: [...carrito],
            fecha: Timestamp.fromDate(new Date()),
            total: precioTotal(),
        }
        sendOrder(orden)
    }

    const sendOrder = async (orden) => {
        try {
            const ordenesRef = collection(db, 'pedidos');
            const ordenDb = await addDoc(ordenesRef, orden);
            setIdorden(ordenDb.id)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            {idOrden ? (
                <div>
                    <h2>Orden finalizada correctamente 👌</h2>
                    <p>Su numero de pedido:{idOrden}</p>
                </div>
            ) : (
                <FormularioCheckout
                    datosForm={datosForm}
                    handleChangeInput={handleChangeInput}
                    handleSubmitForm={handleSubmitForm}
                />
            )}
        </div>
    );
};
export default Checkout;