import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AlertsMessage from "../../components/Alerts/AlertsMessage";
import { useState } from "react";
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

        if (
            !email.trim() ||
            !password.trim() ||
            !confirmPassword.trim()
        ) {
            setLocalError("Todos los campos son obligatorios"); 
            return;
        }

        if (password !== confirmPassword) {
            setLocalError("Las contraseñas no coinciden");
            return;
        }

        if (password.length < 6) {
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
}

export default RegisterPage;