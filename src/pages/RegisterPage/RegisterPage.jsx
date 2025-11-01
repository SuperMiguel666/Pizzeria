import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AlertsMessage from "../../components/Alerts/AlertsMessage";
import { useState } from "react";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);


 const validarDatos = (e) => {
        e.preventDefault();

        setErrorMessage(null);
        setSuccessMessage(null);

        if (
            !email.trim() ||
            !password.trim() ||
            !confirmPassword.trim()
        ) {
            setErrorMessage("Todos los campos son obligatorios"); 
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("Las contraseñas no coinciden");
            return;
        }

        if (password.length < 8) {
        setErrorMessage("La contraseña debe tener al menos 8 caracteres");
        return; 
        }

        setSuccessMessage("¡Registro exitoso!");

        
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

  return (
    <>
      <div className="container sm mt-5">
        <h3>Register</h3>
        <Form onSubmit={validarDatos}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirme Contraseña"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </Form.Group>
          {errorMessage && <AlertsMessage message={errorMessage} variant="danger"/>}
          {successMessage && <AlertsMessage message={successMessage} variant="success" />}

          <Button variant="primary" type="submit">
            Enviar
          </Button>
          
        </Form>
        <hr />
        <h5>Correo ingresado :</h5>
        {email}
      </div>
    </>
  );
}

export default RegisterPage;