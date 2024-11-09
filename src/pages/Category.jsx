// src/components/Category.js
import React from 'react';
import { categoriesData } from '../data/CategoriesData';
import CategoryCard from '../components/CategoryCard';

const Category = () => {
  return (
    <div className="cake-list">
      {categoriesData.map(category => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Category;