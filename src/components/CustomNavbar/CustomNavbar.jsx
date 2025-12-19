<<<<<<< HEAD
import React, { useContext } from "react"; 
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom"; 
=======
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import Button from 'react-bootstrap/Button';
>>>>>>> fc6496ec22be95e168897e5e224d2a8fbc4ac85e
import { CartContext } from "../../contexts/CartContext";
import { UserContext } from "../../contexts/UserContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";

function CustomNavbar() {
<<<<<<< HEAD
  
  const { total } = useContext(CartContext);
  const { token, logout, email } = useContext(UserContext);
=======
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);
>>>>>>> fc6496ec22be95e168897e5e224d2a8fbc4ac85e
  const navigate = useNavigate(); 
  
  const totalPrecio = total.toLocaleString("es-ES");
  
  const handleLogout = () => {
<<<<<<< HEAD
    logout();
    navigate('/'); 
=======
    // 🚨 1. NAVEGA PRIMERO
    navigate('/'); 
    // 2. LUEGO EJECUTA EL LOGOUT
    logout();
>>>>>>> fc6496ec22be95e168897e5e224d2a8fbc4ac85e
  }
  
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Link to="/" className="text-white ms-3 text-decoration-none d-flex gap-1 align-items-center">
            <FontAwesomeIcon icon={faHouse} className="w-4 h-4 text-gray-400 " />
            Home
          </Link>
          <Nav className="ms-auto align-items-center gap-4">
            {token ? (
              <>
                <Link
                  to="/profile"
                  className="text-white ms-3 text-decoration-none"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="w-4 h-4 text-gray-400"
                  />
<<<<<<< HEAD
                  {email ? email : 'Profile'}
=======
                  Profile
>>>>>>> fc6496ec22be95e168897e5e224d2a8fbc4ac85e
                </Link>
                <Nav.Link href="#logout" onClick={handleLogout}>🔒 Logout</Nav.Link>
              </>
            ) : (
              <>
                <Link
                  to="/register"
                  className="text-white text-decoration-none gap-1 align-items-center"
                >
                  Register 🔐
                </Link>
                <Link
                  to="/login"
                  className="text-white text-decoration-none gap-1 align-items-center"
                >
                  Login 🔐
                </Link>
              </>
            )}
            <Link to="/404" className="text-white text-decoration-none gap-1 align-items-center">
              + Más info
            </Link>
<<<<<<< HEAD
              <Link
                to="/cart"
                className="text-white text-decoration-none ml-5"
              >
                <FontAwesomeIcon  
=======
            <Button className="ml-5">
              <Link
                to="/cart"
                className="text-white text-decoration-none"
              >
                <FontAwesomeIcon
>>>>>>> fc6496ec22be95e168897e5e224d2a8fbc4ac85e
                  icon={faBasketShopping}
                  className="w-4 h-4 text-gray-400"
                /> {(total || 0).toLocaleString("es-CL")}
              </Link>
<<<<<<< HEAD
            
=======
            </Button>
>>>>>>> fc6496ec22be95e168897e5e224d2a8fbc4ac85e
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;