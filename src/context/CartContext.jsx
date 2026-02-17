import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map((prod) => 
                prod.id === item.id 
                ? { ...prod, quantity: prod.quantity + quantity } 
                : prod
            ));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    };

    const totalQuantity = () => {
        return cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ 
            cart, 
            addItem, 
            removeItem, 
            clearCart, 
            totalPrice, 
            totalQuantity 
        }}>
            {children}
        </CartContext.Provider>
    );
};