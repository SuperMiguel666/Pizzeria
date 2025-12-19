<<<<<<< HEAD
import React, { useContext, useState } from 'react';
import ItemCart from '../../components/ItemCart/ItemCart.jsx';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
=======
import React, { useContext } from 'react'; // Importamos useContext
import ItemCart from '../../components/ItemCart/ItemCart.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
>>>>>>> fc6496ec22be95e168897e5e224d2a8fbc4ac85e
import { CartContext } from '../../contexts/CartContext.jsx';
import { UserContext } from "../../contexts/UserContext";

function Cart() {
<<<<<<< HEAD
    const { token } = useContext(UserContext);

    const { 
        cartItems, 
        increaseQuantity, 
        decreaseQuantity, 
        total,
        clearCart
    } = useContext(CartContext);

    const [purchaseSuccess, setPurchaseSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleCheckout = async () => {
        if (cartItems.length === 0 || !token || loading) {
            console.warn("Advertencia: Intento de checkout fallido por carrito vacío o falta de token.");
            return;
        }

        setLoading(true);
        setPurchaseSuccess(false);
        setError(null);

        const orderData = {
            products: cartItems.map(item => ({
                productId: item.id,
                quantity: item.count,
                price: item.price,
            })),
            total: total
        }

        try {
            console.log("DEBUG: Iniciando POST a /api/checkouts con Token:", token.substring(0, 10) + '...');
            console.log("DEBUG: Payload enviado:", orderData);

            const response = await fetch('/api/checkouts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` 
                },
                body: JSON.stringify(orderData)
            });

            console.log("DEBUG: Respuesta recibida. Status:", response.status, "OK:", response.ok);

            if (response.ok) {
                try {
                    const data = await response.json();
                    console.log('DEBUG: Datos del Backend (Compra Exitosa):', data);
                } catch (jsonError) {
                    console.error('DEBUG: 🛑 ERROR: Respuesta OK (200/201) pero no se pudo parsear JSON.', jsonError);
                    const textResponse = await response.text();
                    console.log('DEBUG: Respuesta recibida como Texto:', textResponse);
                }

                setPurchaseSuccess(true); 
                console.log('Compra realizada con éxito!');
                
                if (typeof clearCart === 'function') {
                    clearCart();
                }

            } else {
                let errorMessage = `Error del servidor: ${response.status}`;
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.message || errorMessage;
                } catch (e) {
                }
                
                setError(errorMessage);
                console.error('Error al realizar la compra:', errorMessage);
                setPurchaseSuccess(false);
            }
        } catch (err) {
            setError('Hubo un error de conexión. Intenta de nuevo.');
            console.error('Error de red:', err);
            setPurchaseSuccess(false);
        } finally {
            setLoading(false);
        }
    }

    if (purchaseSuccess) {
        return (
            <Container className='p-5'>
                <Alert variant="success" className="mt-5">
                    <Alert.Heading>¡Compra Realizada con Éxito! 🎉</Alert.Heading>
                    <p>
                    ¡Gracias por tu compra!
                    </p>
                </Alert>
            </Container>
        );
    }

    return (
        <Container className='p-5'>
            <h5 className='mb-5'>Detalles del pedido</h5>
            
            {error && (
                <Alert variant="danger" onClose={() => setError(null)} dismissible>
                    {error}
                </Alert>
            )}

            {cartItems.length > 0 ? (
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
            ) : (
                <p className="text-muted">El carrito está vacío.</p>
            )}
            
            <h6 className='mt-5'>Total: ${total.toLocaleString("es-CL")} </h6>
            
            <Button 
                className='mt-2' 
                onClick={handleCheckout} 
                disabled={!token || cartItems.length === 0 || loading} 
            >
                {loading ? 'Procesando...' : 'Pagar'}
            </Button>
            
            {!token && (
                <p className='text-danger mt-2'>
                    Debes iniciar sesión para pagar.
                </p>
            )}

            {token && cartItems.length === 0 && (
                <p className='text-muted mt-2'>
                    Añade productos para poder pagar.
                </p>
            )}
        </Container>
    )
=======
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
>>>>>>> fc6496ec22be95e168897e5e224d2a8fbc4ac85e
}

export default Cart;