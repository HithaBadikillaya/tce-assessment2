
import React from 'react';
import { useParams } from 'react-router-dom';
import { cakesData } from '../data/cakesData'; 

const CakeDetailsPage = () => {
  const { id } = useParams();
  const cake = cakesData.find(cake => cake.id === parseInt(id));

  return (
    <div>
      <h1>{cake.name}</h1>
      <img src={cake.image} alt={cake.name} />
      <p>Ingredients: {cake.ingredients.join(', ')}</p>
      <p>Price: ${cake.price}</p>
      
    </div>
  );
};

export default CakeDetailsPage;