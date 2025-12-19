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

<<<<<<< HEAD
  const handleSubmit = async (e) => {
=======
  const validarDatos = (e) => {
>>>>>>> fc6496ec22be95e168897e5e224d2a8fbc4ac85e
    e.preventDefault();

    setErrorMessage(null);
    setSuccessMessage(null);

    if (!email.trim() || !password.trim()) {
<<<<<<< HEAD
      setErrorMessage("Todos los campos son obligatorios.");
=======
      setErrorMessage("Todos los campos son obligatorios");
>>>>>>> fc6496ec22be95e168897e5e224d2a8fbc4ac85e
      return;
    }

    if (password.length < 6) {
<<<<<<< HEAD
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
=======
      setErrorMessage("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (password === "123456") {
      
      login(); 
      
      setSuccessMessage("¡Ingreso exitoso! Redirigiendo...");
      setEmail("");
      setPassword("");
      
      setTimeout(() => {
        navigate("/"); 
      }, 1000);
      
      return;
    }
    setErrorMessage("La contraseña es incorrecta");
    return;
>>>>>>> fc6496ec22be95e168897e5e224d2a8fbc4ac85e
  };

  return (
    <>
<<<<<<< HEAD
      {" "}
      <div className="container sm my-5">
        <h3>Login</h3> {" "}
        <Form onSubmit={handleSubmit}>
          {" "}
          <Form.Group className="mb-3" controlId="emailInput">
            <Form.Label>Email address</Form.Label>
            {" "}
=======
      <div className="container sm my-5">
        <h3>Login</h3>
        <Form onSubmit={validarDatos}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
>>>>>>> fc6496ec22be95e168897e5e224d2a8fbc4ac85e
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
<<<<<<< HEAD
            {" "}
          </Form.Group>
          {" "}
          <Form.Group className="mb-3" controlId="passwordInput">
            <Form.Label>Contraseña</Form.Label>
            {" "}
=======
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Contraseña</Form.Label>
>>>>>>> fc6496ec22be95e168897e5e224d2a8fbc4ac85e
            <Form.Control
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
<<<<<<< HEAD
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
=======
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
>>>>>>> fc6496ec22be95e168897e5e224d2a8fbc4ac85e
    </>
  );
}

<<<<<<< HEAD
export default LoginPage;
=======
export default LoginPage;
>>>>>>> fc6496ec22be95e168897e5e224d2a8fbc4ac85e
