// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import CakeDetailsPage from './pages/CakeDetails';
import CartPage from './pages/Cart';
import AboutUsPage from './pages/About';
import Category from './pages/Category';
import CakesPage from './pages/CategoryCake'; 
import './styles.css'; 
import CategoryDetailPage from './pages/CategoryDetail';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cakes" element={<CakesPage />} /> {/* Add this line for the cakes page */}
          <Route path="/cakes/:id" element={<CakeDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/categories/:category" element={<CategoryDetailPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;