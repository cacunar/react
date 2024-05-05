import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./Contactpage.css"

function Contactpage() {
  return (
    <div>
      <h1>Cuentanos, ¿en que te podemos ayudar hoy?</h1>
      <div className="container">
        <div className="row justify-content-center">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>
        <Button variant="danger" type="submit">
          Enviar
        </Button>
      </Form>
        </div>
      </div>

    </div>
  );
}

export default Contactpage;
