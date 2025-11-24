import React from 'react';
import Img404 from '../../assets/img/404-notfound.jpg'; 
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className='p-5'>
      <img className='img-fluid d-block mx-auto' src={Img404} alt="" />
      <h5 className='text-center'>
      
      Esta página no se encuentra disponible :(
      </h5>  
     <div className='text-center mt-3'> {/* Opcional: añadir un margen superior (mt-3) */}
    <Link to="/" className="btn btn-primary text-white">
      Volver a Home
    </Link>
</div>
      </div>
  )
}

export default NotFound