import React from 'react';

const CartItem = ({ cake, removeFromCart }) => {
  const totalPrice = cake.price * cake.quantity;

  return (
    <div className="cart-item">
      <img src={cake.image} alt={cake.name} />
      <h2>{cake.name}</h2>
      <p>Quantity: {cake.quantity}</p>
      <p>Price per item: ${cake.price.toFixed(2)}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p> 
      <button onClick={() => removeFromCart(cake.id)}>Remove</button>
    </div>
  );
};

export default CartItem;