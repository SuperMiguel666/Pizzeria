import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AlertsMessage from "../../components/Alerts/AlertsMessage";
import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const validarDatos = (e) => {
    e.preventDefault();

    setErrorMessage(null);
    setSuccessMessage(null);

    if (!email.trim() || !password.trim()) {
      setErrorMessage("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (password === "123456") {
      setSuccessMessage("¡Ingreso exitoso!");
      setEmail("");
      setPassword("");
      return;
    }
    setErrorMessage("La contraseña es incorrecta");
    return;
  };

  return (
    <>
      <div className="container sm my-5">
        <h3>Login</h3>
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
          {errorMessage && (
            <AlertsMessage message={errorMessage} variant="danger" />
          )}
          {successMessage && (
            <AlertsMessage message={successMessage} variant="success" />
          )}
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </>
  );
}

export default LoginPage;