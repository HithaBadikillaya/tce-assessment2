
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(cake => (
          <CartItem key={cake.id} cake={cake} removeFromCart={removeFromCart} />
        ))
      )}
   
    </div>
  );
};

export default CartPage;