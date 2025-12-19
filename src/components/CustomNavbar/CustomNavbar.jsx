import React, { useContext } from "react"; 
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom"; 
import { CartContext } from "../../contexts/CartContext";
import { UserContext } from "../../contexts/UserContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";

function CustomNavbar() {
  
  const { total } = useContext(CartContext);
  const { token, logout, email } = useContext(UserContext);
  const navigate = useNavigate(); 
  
  const totalPrecio = total.toLocaleString("es-ES");
  
  const handleLogout = () => {
    logout();
    navigate('/'); 
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
                  {email ? email : 'Profile'}
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
              <Link
                to="/cart"
                className="text-white text-decoration-none ml-5"
              >
                <FontAwesomeIcon  
                  icon={faBasketShopping}
                  className="w-4 h-4 text-gray-400"
                /> {(total || 0).toLocaleString("es-CL")}
              </Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;