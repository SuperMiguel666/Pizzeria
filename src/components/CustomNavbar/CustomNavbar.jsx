import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'

export default function CustomNavbar() {
  const total = 25000;
  const totalPrecio = total.toLocaleString('es-ES');
  const token = false;
  return (
     <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">🍕 Home</Navbar.Brand>
          <Nav className="ms-auto">
            {token ? (
            <>
                <Nav.Link href="#profile">🔓 Profile</Nav.Link>
                <Nav.Link href="#logout">🔒 Logout</Nav.Link>
            </>
            ) : (
            <>
                <Nav.Link href="#login">🔐 Login</Nav.Link>
                <Nav.Link href="#register">🔐 Register</Nav.Link>
            </>
            )}
            <Nav.Link href="#total"> 🛒 Total: ${totalPrecio}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  )
}
