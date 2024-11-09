// src/components/CategoryCard.js
import React from 'react';
import { Link } from 'react-router-dom';
const CategoryCard = ({ category }) => {
  const formattedCategoryName = category.name.toLowerCase().replace(/ /g, '-'); 

  return (
    <div className="category-card">
      <img src={category.image} alt={category.name} />
      <h2>{category.name}</h2>
      <p>{category.description}</p>
      <Link to={`/categories/${formattedCategoryName}`}>
        <button>View Cakes</button>
      </Link>
    </div>
  );
};

export default CategoryCard;