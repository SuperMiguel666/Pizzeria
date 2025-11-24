import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";

function CustomNavbar() {
  const total = 25000;
  const totalPrecio = total.toLocaleString("es-ES");
  const token = false;
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="/" className="text-white ms-3 text-decoration-none d-flex gap-1 align-items-center">
            <FontAwesomeIcon icon={faHouse} className="w-4 h-4 text-gray-400 " />
            Home
          </Link>
          <Nav className="ms-auto align-items-center gap-4">
            {token ? (
              //el usuario ha iniciado sesión?
              <>
                {/* <Link
                  to="/profile"
                  className="text-white ms-3 text-decoration-none"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="w-4 h-4 text-gray-400"
                  />
                  Profile
                </Link> */}
                {/* <Nav.Link href="#logout">🔒 Logout</Nav.Link> */}
              </>
            ) : (
              <>
              <Link
                  to="/profile"
                  className="text-white text-decoration-none d-flex gap-1 align-items-center"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="w-4 h-4 text-gray-400"
                  />
                  Profile
                </Link>
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
            <Button className="ml-5">
            <Link
                  to="/cart"
                  className="text-white text-decoration-none"
                >
                  <FontAwesomeIcon
                icon={faBasketShopping}
                className="w-4 h-4 text-gray-400"
              /> Total: ${totalPrecio}
                </Link>
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
