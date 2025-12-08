import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const inCart = cartItems.find((item) => item.id === product.id);

        if (inCart) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id ? { ...item, count: item.count + 1 } : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, count: 1 }]);
        }
    };

    const increaseQuantity = (id) => {
        setCartItems(prevCart => prevCart.map(pizza =>
            pizza.id === id
              ? { ...pizza, count: pizza.count + 1 }
              : pizza
        ));
    };

    const decreaseQuantity = (id) => {
        setCartItems(prevCart => {
            const updatedCart = prevCart.map(pizza => {
                if (pizza.id === id) {
                    const newQuantity = pizza.count - 1;

                    return newQuantity > 0 ? { ...pizza, count: newQuantity } : null;
                }
                return pizza;
            }).filter(Boolean);

            return updatedCart;
        });
    };

    const total = cartItems.reduce((acc, item) => acc + (item.price * item.count), 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            increaseQuantity,
            decreaseQuantity,
            total
        }}>
            {children}
        </CartContext.Provider>
    );
};