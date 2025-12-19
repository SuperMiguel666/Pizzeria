import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AlertsMessage from "../../components/Alerts/AlertsMessage";
import { useState } from "react";
<<<<<<< HEAD
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [localError, setLocalError] = useState(null);

    const { register, loading, authError, setAuthError } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLocalError(null);
        setAuthError(null);
=======

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
>>>>>>> fc6496ec22be95e168897e5e224d2a8fbc4ac85e

        if (
            !email.trim() ||
            !password.trim() ||
            !confirmPassword.trim()
        ) {
<<<<<<< HEAD
            setLocalError("Todos los campos son obligatorios"); 
=======
            setErrorMessage("Todos los campos son obligatorios"); 
>>>>>>> fc6496ec22be95e168897e5e224d2a8fbc4ac85e
            return;
        }

        if (password !== confirmPassword) {
<<<<<<< HEAD
            setLocalError("Las contraseñas no coinciden");
=======
            setErrorMessage("Las contraseñas no coinciden");
>>>>>>> fc6496ec22be95e168897e5e224d2a8fbc4ac85e
            return;
        }

        if (password.length < 6) {
<<<<<<< HEAD
            setLocalError("La contraseña debe tener al menos 6 caracteres");
            return; 
        }

        if (localError) return;


        try {
            await register(email, password); 

            setEmail('');
            setPassword('');
            setConfirmPassword('');

            setTimeout(() => {
                navigate('/profile'); 
            }, 1000);

        } catch (error) {
            console.error("Error capturado por el componente:", error.message);
        }
    };

    return (
        <>
            <div className="container sm my-5">
                <h3>Register</h3>
                <Form onSubmit={handleSubmit}>
                                        
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="passwordInput">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Contraseña"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="confirmPasswordInput">
                        <Form.Label>Confirme Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirme Contraseña"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            required
                        />
                    </Form.Group>
                    
                    {(authError || localError) && (
                         <AlertsMessage message={authError || localError} variant="danger"/>
                    )}
                    
                    <Button variant="primary" type="submit" disabled={loading}>
                        {loading ? 'Registrando...' : 'Enviar'}
                    </Button>
                    
                </Form>
                <hr />
                <h5>Correo ingresado :</h5>
                {email}
            </div>
        </>
    );
=======
        setErrorMessage("La contraseña debe tener al menos 6 caracteres");
        return; 
        }

        setSuccessMessage("¡Registro exitoso!");

        
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

  return (
    <>
      <div className="container sm my-5">
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
>>>>>>> fc6496ec22be95e168897e5e224d2a8fbc4ac85e
}

export default RegisterPage;