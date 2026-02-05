/**
 * ProductList Component
 * 
 * Displays plant products organized by category with the following features:
 * - Multiple plant categories (Aromatic Plants, Medicinal Plants)
 * - Plant cards with thumbnails, names, descriptions, and prices
 * - "Add to Cart" functionality integrated with Redux
 * - Responsive grid layout that adapts to different screen sizes
 * - Real-time cart quantity updates via Redux dispatch
 */

import { plants } from "./data";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

export default function ProductList() {
  // Get Redux dispatch function to trigger cart actions
  const dispatch = useDispatch();

  // Extract unique plant categories from the plants data
  // Uses Set to eliminate duplicates, then spreads back to array
  const categories = [...new Set(plants.map(p => p.category))];

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
              .map((plant) => (
                <article className="card" key={plant.id}>
                  {/* Plant thumbnail image */}
                  <img 
                    className="card-image" 
                    src={plant.image} 
                    alt={plant.name}
                    title={`${plant.name} - Click 'Add to Cart' to purchase`}
                  />
                  
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
                      
                      {/* Add to Cart button - dispatches addItem action to Redux */}
                      {/* Updates cart state and increments quantity if item already exists */}
                      <button 
                        className="btn" 
                        onClick={() => dispatch(addItem(plant))}
                        aria-label={`Add ${plant.name} to cart`}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
