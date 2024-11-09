// src/pages/HomePage.js
import React from 'react';
import CakeCard from '../components/CakeCard';
import { cakesData } from '../data/cakesData'; 

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Our Cake Shop</h1>
      <h1> Check out similar cakes in the category section. Happy Shopping!</h1>
      <div className="featured-cakes">
        {cakesData.map(cake => (
          <CakeCard key={cake.id} cake={cake} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;