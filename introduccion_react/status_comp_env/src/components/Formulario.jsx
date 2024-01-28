import React, { useState } from 'react';

const Formulario = ({ onAlert }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, password, confirmPassword } = formData;
    const emailRegex = /\S+@\S+\.\S+/;

    if (!name || !email || !password || !confirmPassword) {
      onAlert('Todos los campos son obligatorios.', 'danger');
      return false;
    }
    
    if (!emailRegex.test(email)) {
      onAlert('Por favor, ingresa un correo electrónico válido.', 'danger');
      return false;
    }
    
    if (password !== confirmPassword) {
      onAlert('Las contraseñas no coinciden.', 'danger');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onAlert('Registro exitoso!', 'success');
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <input
        type="text"
        name="name"
        className="form-input"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        className="form-input"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        className="form-input"
        placeholder="Contraseña"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        type="password"
        name="confirmPassword"
        className="form-input"
        placeholder="Confirma tu contraseña"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <button type="submit" className="submit-button">
        Registrarse
      </button>
    </form>
  );
};

export default Formulario;
