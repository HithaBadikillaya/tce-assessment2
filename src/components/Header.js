
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Cake Delight</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/about">About Us</Link>
      </nav>
    </header>
  );
};

export default Header;