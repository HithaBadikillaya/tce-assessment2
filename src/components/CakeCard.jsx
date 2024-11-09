
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CakeCard = ({ cake }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="cake-card">
      <img src={cake.image} alt={cake.name} />
      <h2>{cake.name}</h2>
      <p>${cake.price}</p>
      <button onClick={() => addToCart(cake)}>Add to Cart</button>
      <Link to={`/cakes/${cake.id}`}>View Details</Link>
    </div>
  );
};

export default CakeCard;