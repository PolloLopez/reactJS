import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import FormularioCheckout from "./FormularioCheckout";
import db from "../../db/db.js";
import validateForm from "../../utils/validacionFormulario.js";
import { toast } from "react-toastify";

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });
  const [idOrden, setIdorden] = useState(null);
  const { carrito, precioTotal } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    //formatear correctamente la info de orden a subir
    const orden = {
      comprador: { ...datosForm },
      productos: [...carrito],
      fecha: Timestamp.fromDate(new Date()),
      total: precioTotal(),
    };

    //validamos los campos del formulario antes de eviar la orden
    const response = await validateForm(datosForm);
    if (response.status === "sucess") {
      sendOrder(orden);
    } else {
      toast.warning(response.message);
    }
  };

  const sendOrder = async (orden) => {
    try {
      const ordenesRef = collection(db, "pedidos");
      const ordenDb = await addDoc(ordenesRef, orden);
      setIdorden(ordenDb.id);
    } catch (error) {
      console.log(error);
    }
  };

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
