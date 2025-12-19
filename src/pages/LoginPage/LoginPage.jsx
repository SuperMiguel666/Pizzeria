import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AlertsMessage from "../../components/Alerts/AlertsMessage";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage(null);
    setSuccessMessage(null);

    if (!email.trim() || !password.trim()) {
      setErrorMessage("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
      await login(email, password);
      setSuccessMessage(
        "¡Ingreso exitoso! Redirigiendo a la página principal..."
      );
      setEmail("");
      setPassword("");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Error en el login:", error.message);
      setErrorMessage(`Error al iniciar sesión: ${error.message}`);
    }
  };

  return (
    <>
      {" "}
      <div className="container sm my-5">
        <h3>Login</h3> {" "}
        <Form onSubmit={handleSubmit}>
          {" "}
          <Form.Group className="mb-3" controlId="emailInput">
            <Form.Label>Email address</Form.Label>
            {" "}
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {" "}
          </Form.Group>
          {" "}
          <Form.Group className="mb-3" controlId="passwordInput">
            <Form.Label>Contraseña</Form.Label>
            {" "}
            <Form.Control
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
           {" "}
          </Form.Group>
          {" "}
          {errorMessage && (
            <AlertsMessage message={errorMessage} variant="danger" />
          )}
          {" "}
          {successMessage && (
            <AlertsMessage message={successMessage} variant="success" />
          )}
          {" "}
          <Button variant="primary" type="submit">
           Enviar {" "}
          </Button>
          {" "}
        </Form>
        {" "}
      </div>
      {" "}
    </>
  );
}

export default LoginPage;
