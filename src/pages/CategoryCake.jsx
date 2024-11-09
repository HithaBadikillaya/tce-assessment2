
import React from 'react';
import { cakesData } from '../data/cakesData'; 

const CakesPage = () => {
  return (
    <div className="cakes-page">
      <h1>Cakes</h1>
      <div className="cakes-list">
        {cakesData.map(cake => (
          <div key={cake.id} className="cake-item">
            <img src={cake.image} alt={cake.name} className="cake-image" />
            <h3>{cake.name}</h3>
            <p>{cake.description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default CakesPage;