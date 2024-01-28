import React, { useState } from 'react';
import Registro from './components/Registro';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';

const App = () => {
  const [alert, setAlert] = useState({
    message: '',
    type: ''
  });

  const updateAlert = (message, type) => {
    setAlert({ message, type });
  };

  return (
    <div className="background-color">
      <div className="container py-5">
      <Registro onAlert={updateAlert} alert={alert}/>
      </div>
    </div>
  );
};

export default App;
