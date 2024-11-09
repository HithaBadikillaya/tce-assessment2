import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { categoriesData } from '../data/CategoriesData';
import { CartContext } from '../context/CartContext'; // Import the CartContext

const CategoryDetailPage = () => {
  const { category } = useParams(); // Get the category name from the URL
  const selectedCategory = categoriesData.find(cat => cat.name.toLowerCase().replace(/ /g, '-') === category.toLowerCase());

  const { cart, addToCart } = useContext(CartContext); // Use context to manage cart state
  const [quantity, setQuantity] = useState(1); // State to track the quantity

  const handleAddToCart = (cake) => {
    const totalPrice = cake.price * quantity; // Calculate total price based on quantity
    const cakeWithQuantity = { ...cake, quantity, totalPrice }; // Create a new object with the selected quantity and total price
    addToCart(cakeWithQuantity); // Use the addToCart function from context
    setQuantity(1); // Reset quantity after adding to cart
  };

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1)); // Prevent quantity from going below 1
  };

  return (
    <div>
      <h1>Cart Items: {cart.length}</h1> {/* Display the number of items in the cart */}
      {selectedCategory ? (
        <>
          <h1>{selectedCategory.name}</h1>
          <p>{selectedCategory.description}</p>
          <div className="cake-list">
            {selectedCategory.cakes && selectedCategory.cakes.map(cake => (
              <div className="cake-card" key={cake.id}>
                <img src={cake.image} alt={cake.name} />
                <h2>{cake.name}</h2>
                <p>{cake.description}</p>
                <p>Price: ${cake.price}</p>
                <div>
                  <button onClick={decreaseQuantity}>-</button>
                  <span>{quantity}</span>
                  <button onClick={increaseQuantity}>+</button>
                </div>
                <button onClick={() => handleAddToCart(cake)}>Add to Cart</button> {/* Add to Cart button */}
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Category Not Found</p>
      )}
    </div>
  );
};

export default CategoryDetailPage;