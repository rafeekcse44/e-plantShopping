/**
 * ProductList Component
 * 
 * Displays plant products organized by category with the following features:
 * - Multiple plant categories (Aromatic Plants, Medicinal Plants)
 * - Plant cards with thumbnails, names, descriptions, and prices
 * - "Add to Cart" functionality integrated with Redux
 * - Responsive grid layout that adapts to different screen sizes
 * - Real-time cart quantity updates via Redux dispatch
 * - Button state management: disables button and shows "Added to Cart" after purchase
 * - Dynamic button re-enable when item is removed from cart
 */

import { plants } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

export default function ProductList() {
  // Get Redux dispatch function to trigger cart actions
  const dispatch = useDispatch();
  
  // Get current cart items from Redux store to track which items are in cart
  const cartItems = useSelector(state => state.cart.items);
  
  // Create a Set of item IDs currently in cart for fast lookup
  // This allows O(1) lookup instead of O(n) array search
  const cartItemIds = new Set(cartItems.map(item => item.id));

  // Extract unique plant categories from the plants data
  // Uses Set to eliminate duplicates, then spreads back to array
  const categories = [...new Set(plants.map(p => p.category))];

  /**
   * Handle adding plant to cart
   * - Dispatches addItem action to Redux
   * - Button will automatically disable through cartItemIds check
   * - Cart quantity updates in real-time through Redux state
   */
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="container">
      <h2 className="section-title">Our Plants</h2>
      
      {/* Map over each category and create a section */}
      {categories.map((cat) => (
        <section key={cat} className="category-section">
          <h3 className="category-title">{cat}</h3>
          
          {/* Responsive grid layout for plant cards */}
          <div className="products-grid">
            {/* Filter plants by current category and map to cards */}
            {plants
              .filter((p) => p.category === cat)
              .map((plant) => {
                // Check if this plant is already in the cart
                const isInCart = cartItemIds.has(plant.id);
                // Find the cart item to display quantity if it exists
                const cartItem = cartItems.find(item => item.id === plant.id);
                
                return (
                  <article className="card" key={plant.id}>
                    {/* Plant thumbnail image */}
                    <img 
                      className="card-image" 
                      src={plant.image} 
                      alt={plant.name}
                      title={`${plant.name} - ${isInCart ? 'In cart' : 'Click to add to cart'}`}
                    />
                    
                    {/* Cart quantity badge - displays if item is in cart */}
                    {isInCart && (
                      <div className="quantity-badge" title={`${cartItem.quantity} in cart`}>
                        {cartItem.quantity}
                      </div>
                    )}
                    
                    {/* Card content section */}
                    <div className="card-body">
                      {/* Plant name */}
                      <h4 className="card-title">{plant.name}</h4>
                      
                      {/* Plant description */}
                      <p className="card-desc">{plant.description}</p>
                      
                      {/* Price and Add to Cart button */}
                      <div className="card-footer">
                        {/* Plant price display */}
                        <span className="price">${plant.cost}</span>
                        
                        {/* Add to Cart button with dynamic state */}
                        {/* Button is disabled if item is in cart, label changes to "Added to Cart" */}
                        {/* Cart quantity updates dynamically when quantity is adjusted in cart page */}
                        <button 
                          className={`btn ${isInCart ? 'added' : ''}`}
                          onClick={() => handleAddToCart(plant)}
                          disabled={isInCart}
                          aria-label={`${isInCart ? `${plant.name} in cart` : `Add ${plant.name} to cart`}`}
                          title={isInCart ? `${plant.name} is in your cart (qty: ${cartItem.quantity})` : `Add ${plant.name} to cart`}
                        >
                          {isInCart ? `✓ Added to Cart (${cartItem.quantity})` : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}
