import React, { useState } from 'react'; // 👈 Corregido: Importar useState
import { pizzaCart } from "../../js/pizzas.js";
import ItemCart from '../../components/ItemCart/ItemCart.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Cart() {
  const [cart, setCart] = useState(pizzaCart.map(p => ({ ...p, quantity: 1 })));

  const addition = (id) => {
    setCart(prevCart => prevCart.map(pizza =>
      pizza.id === id
        ? { ...pizza, quantity: pizza.quantity + 1 } 
        : pizza
    ));
  };


  const substract = (id) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(pizza => {
        if (pizza.id === id) {
          const newQuantity = pizza.quantity - 1;
          
          return newQuantity > 0 ? { ...pizza, quantity: newQuantity } : null;
        }
        return pizza;
      }).filter(Boolean); 

      return updatedCart;
    });
  };


  const total = cart.reduce((totalCart, pizza) => {
    return totalCart + (pizza.price * pizza.quantity);
  }, 0);


  return (
    <Container className='p-5'>
      <h5 className='mb-5'>Detalles del pedido</h5>
      <>

        {cart.map(pizza => (
          <ItemCart
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            img={pizza.img}
            quantity={pizza.quantity} 
            handleAddition={addition} 
            handleSubstract={substract} 
          />
        ))}
      </>
      <h6 className='mt-5'>Total: ${total.toLocaleString("es-CL")} </h6>
      <Button className='mt-2'>Pagar</Button>
    </Container>
  )
}

export default Cart;