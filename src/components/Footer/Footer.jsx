import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGoogle,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className="text-center lg:text-left text-white rounded-xl shadow-2xl bg-dark">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="mt-3">
                <h6 className="uppercase mb-4 font-extrabold text-lg">
                  Mamma Mía Pizzería
                </h6>
                <p className="text-gray-300 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
                  La vera pizza a la pietra... 
                  <br />
                  ¡Directamente en tu casa!
                </p>
              </div>
            </div>
            <div className="col">
              <div className="mt-3">
                <h6 className="uppercase mb-4 font-semibold">Sucursales</h6>
                <p className="mb-2">
                  <a
                    href="#"
                    className="text-white hover:text-indigo-400 transition-colors duration-300 text-sm"
                  >
                    Maipú
                  </a>
                </p>
                <p className="mb-2">
                  <a
                    href="#"
                    className="text-white hover:text-indigo-400 transition-colors duration-300 text-sm"
                  >
                    Macul
                  </a>
                </p>
                <p className="mb-2">
                  <a
                    href="#"
                    className="text-white hover:text-indigo-400 transition-colors duration-300 text-sm"
                  >
                    Providencia
                  </a>
                </p>
                <p className="mb-2">
                  <a
                    href="#"
                    className="text-white hover:text-indigo-400 transition-colors duration-300 text-sm"
                  >
                    Puente Alto
                  </a>
                </p>
              </div>
            </div>
            <div class="col">
              <div className="mt-3">
                <h6 className="uppercase mb-4 font-semibold">Contacto</h6>
                {/* Contacto */}
                <FontAwesomeIcon icon={faEnvelope} />
                <p>mammamiapizzeria@gmail.com</p>
                <FontAwesomeIcon icon={faPhone} />
                <p>+568 8874 5964</p>

                {/* Contenedor de Redes Sociales (estáticas) */}
                <div className="flex justify-center lg:justify-start mt-4">
                  {/* Facebook */}
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-2 border border-white mx-1"
                    role="button"
                  >
                    <FontAwesomeIcon icon={faFacebookF} color="orange"/>
                  </a>

                  {/* Google */}
                  <a
                    href="#"
                    aria-label="Google"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-2 border border-white mx-1"
                    role="button"
                  >
                    <FontAwesomeIcon icon={faGoogle} color="orange"/>
                  </a>

                  {/* Instagram */}
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-2 border border-white mx-1"
                    role="button"
                  >
                    <FontAwesomeIcon icon={faInstagram} color="orange"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Separador */}
        <hr className="my-6 border-gray-600" />

        {/* Sección de Copyright */}
        <section className="py-3">
          <div className="text-center">
            <div className="text-sm">
              © {new Date().getFullYear()} Copyright:
              <a
                className="text-white font-semibold hover:text-indigo-400 transition-colors duration-300 ml-1"
                href="#"
              >
                {" "}
                Mamma mia pizzeria
              </a>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
