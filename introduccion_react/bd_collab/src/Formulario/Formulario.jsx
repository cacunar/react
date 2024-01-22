import React, { useState } from "react";

function Formulario({ agregarColaborador, setAlerta }) {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const [campo, valor] of Object.entries(formulario)) {
      if (!valor.trim()) {
        setAlerta({
          mensaje: `Por favor, rellena el campo ${campo}`,
          tipo: "danger",
        });
        return;
      }
    }

    agregarColaborador(formulario);
    setFormulario({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
    setAlerta({
      mensaje: "Colaborador agregado exitosamente",
      tipo: "success",
    });
  };

  return (
    <div className="form-section">
      <h2>Agregar colaborador</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label"></label>
          <input
            type="text"
            placeholder="Nombre del colaborador"
            className="form-input"
            id="nombre"
            name="nombre"
            value={formulario.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label"></label>
          <input
            type="email"
            placeholder="Email del colaborador"
            className="form-input"
            id="correo"
            name="correo"
            value={formulario.correo}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="edad" className="form-label"></label>
          <input
            type="number"
            placeholder="Edad del colaborador"
            className="form-input"
            id="edad"
            name="edad"
            value={formulario.edad}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cargo" className="form-label"></label>
          <input
            type="text"
            placeholder="Cargo del colaborador"
            className="form-input"
            id="cargo"
            name="cargo"
            value={formulario.cargo}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label"></label>
          <input
            type="tel"
            placeholder="Telefono del colaborador"
            className="form-input"
            id="telefono"
            name="telefono"
            value={formulario.telefono}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn-custom">
          Agregar colaborador
        </button>
      </form>
    </div>
  );
}

export default Formulario;
