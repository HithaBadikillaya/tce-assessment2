
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (cake) => {
    setCart((prevCart) => [...prevCart, cake]);
    alert("Added to cart")
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(cake => cake.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};