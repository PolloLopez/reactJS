import React, { useState } from "react";

import "./Formulario.css";

const FormularioCheckout = ({
  datosForm,
  handleChangeInput,
  handleSubmitForm,
}) => {
  const [emailRepeat, setEmailRepeat] = useState("");
  const [error, setError] = useState("");

  const handleEmailRepeatChange = (e) => {
    setEmailRepeat(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (datosForm.email !== emailRepeat) {
      setError("Los emails no coinciden.");
      return;
    }
    setError("");
    handleSubmitForm(e);
  };

  return (
    <form onSubmit={handleFormSubmit} className="formulario">
      <label className="formLabel">Nombre: </label>
      <input
        className="formInput"
        type="text"
        name="nombre"
        value={datosForm.nombre}
        onChange={handleChangeInput}
        required
      />

      <label className="formLabel">Teléfono: </label>
      <input
        className="formInput"
        type="text"
        name="telefono"
        value={datosForm.telefono}
        onChange={handleChangeInput}
        required
      />

      <label className="formLabel">Email: </label>
      <input
        className="formInput"
        type="email"
        name="email"
        value={datosForm.email}
        onChange={handleChangeInput}
        required
      />

      <label className="formLabel">Repetir Email: </label>
      <input
        className="formInput"
        type="email"
        value={emailRepeat}
        onChange={handleEmailRepeatChange}
        required
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit" className="btn enviarPedido">
        Enviar pedido
      </button>
    </form>
  );
};

export default FormularioCheckout;
