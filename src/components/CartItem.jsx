/**
 * CartItem Component
 * 
 * Displays individual cart item with the following features:
 * - Item thumbnail image with alt text
 * - Item name and unit price
 * - Dynamic total cost calculation (unit price × quantity)
 * - Quantity adjustment with +/- buttons
 * - Delete/Remove item button
 * - Real-time updates via Redux dispatch
 */

import { useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../redux/CartSlice";

export default function CartItem({ item }) {
  // Get Redux dispatch function to update cart state
  const dispatch = useDispatch();

  // Calculate total cost for this item (unit price × quantity)
  const itemTotal = item.cost * item.quantity;

  return (
    <div className="cart-item">
      {/* Item thumbnail image */}
      <img 
        src={item.image} 
        alt={item.name} 
        width="80" 
        title={item.name}
      />
      
      {/* Item details section */}
      <div className="cart-body">
        <h4>{item.name}</h4>
        
        {/* Unit price display */}
        <p className="unit-price">Unit Price: <strong>${item.cost.toFixed(2)}</strong></p>
        
        {/* Quantity display */}
        <p className="quantity-display">Quantity: <strong>{item.quantity}</strong></p>
        
        {/* Total cost for this item (dynamically calculated) */}
        <p className="item-total">Item Total: <strong>${itemTotal.toFixed(2)}</strong></p>
      </div>
      
      {/* Quantity adjustment and removal buttons */}
      <div className="cart-actions">
        {/* Increment quantity button */}
        <button 
          className="qty-btn increment-btn"
          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
          title="Increase quantity"
          aria-label={`Increase ${item.name} quantity`}
        >
          +
        </button>
        
        {/* Decrement quantity button */}
        <button 
          className="qty-btn decrement-btn"
          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
          title="Decrease quantity"
          aria-label={`Decrease ${item.name} quantity`}
        >
          −
        </button>
        
        {/* Remove item from cart button */}
        <button 
          className="remove-btn"
          onClick={() => dispatch(removeItem(item.id))}
          title="Remove from cart"
          aria-label={`Remove ${item.name} from cart`}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
