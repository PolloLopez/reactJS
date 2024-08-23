import React, { useState } from "react";

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
    <form onSubmit={handleFormSubmit}>
      <label>Nombre: </label>
      <input
        type="text"
        name="nombre"
        value={datosForm.nombre}
        onChange={handleChangeInput}
        required
      />

      <label>Teléfono: </label>
      <input
        type="text"
        name="telefono"
        value={datosForm.telefono}
        onChange={handleChangeInput}
        required
      />

      <label>Email: </label>
      <input
        type="email"
        name="email"
        value={datosForm.email}
        onChange={handleChangeInput}
        required
      />

      <label>Repetir Email: </label>
      <input
        type="email"
        value={emailRepeat}
        onChange={handleEmailRepeatChange}
        required
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit" className="btn">
        Enviar pedido
      </button>
    </form>
  );
};

export default FormularioCheckout;
