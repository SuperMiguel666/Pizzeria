import React, { useContext } from 'react'; // Importamos useContext
import ItemCart from '../../components/ItemCart/ItemCart.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../contexts/CartContext.jsx';
import { UserContext } from "../../contexts/UserContext";

function Cart() {
  const { token } = useContext(UserContext);

  const { 
    cartItems, 
    increaseQuantity, 
    decreaseQuantity, 
    total 
  } = useContext(CartContext);
  
  return (
    <Container className='p-5'>
      <h5 className='mb-5'>Detalles del pedido</h5>
      
      <>
        {cartItems.map(pizza => (
          <ItemCart
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            img={pizza.img}
            quantity={pizza.count}
            handleAddition={increaseQuantity}
            handleSubstract={decreaseQuantity} 
          />
        ))}
      </>
      
      <h6 className='mt-5'>Total: ${total.toLocaleString("es-CL")} </h6>
      
      <Button 
      className='mt-2' 
      disabled={!token}
    >
      Pagar
    </Button>
    {!token && (
          <p className='text-danger mt-2'>
              Debes iniciar sesión para pagar.
          </p>
      )}
    </Container>
  )
}

export default Cart;