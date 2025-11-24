import React from 'react';
import Button from 'react-bootstrap/Button';
import Iniciales from '../../assets/img/iniciales.png'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 

const Profile = () => {
  const user = {
    name: "Fernanda Paredes",
    location: "Chile",
    email: "email@email.com",
    imageUrl: Iniciales
  };


  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center p-4 md:p-8 font-['Inter']">
      <div className="max-w-md w-full">
        
        <div className="bg-white rounded-xl shadow-2xl p-8 text-center border-t-4 border-blue-600">
          
          {/* Imagen de Perfil */}
          <img
            src={user.imageUrl}
            alt="Avatar"
            className="rounded-full h-32 mx-auto object-cover border-4 border-blue-200 shadow-md transform hover:scale-105 transition duration-300 rounded-circle"
          />
          
          <h2 className="text-2xl font-extrabold mt-4 text-gray-900">{user.name}</h2>
          
          <p className="text-md text-blue-600 font-semibold mt-1">{user.title}</p>
          
          <p className="text-sm text-gray-500 mt-2 flex items-center justify-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-gray-400" />
            <span>{user.email}</span>
          </p>
          
          <p className="text-sm text-gray-500 mt-1 flex items-center justify-center space-x-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 text-gray-400" />
            <span>{user.location}</span>
          </p>
          
          <div className="mt-8 pt-4 border-t border-gray-100">
            

            <Button variant="danger">
              <FontAwesomeIcon icon={faSignOutAlt} className="w-5 h-5 mr-2" />Cerrar Sesión</Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;