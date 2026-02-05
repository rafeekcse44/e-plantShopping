import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

/**
 * CartPage Component
 * 
 * Displays the complete shopping cart with the following features:
 * - List of all items in the cart (rendered via CartItem component)
 * - Dynamic total cart amount calculation
 * - Total updates in real-time as quantities change or items are removed
 * - Empty cart message with link to products
 * - Continue Shopping and Checkout buttons
 */
function CartPage() {
  // Get all items from Redux cart state
  const items = useSelector(state => state.cart.items);
  
  /**
   * Calculate total cart amount
   * Reduces all items by multiplying unit price × quantity for each item
   * Formula: sum = 0; for each item: sum += (item.cost × item.quantity)
   * This updates dynamically whenever cart items or quantities change
   */
  const total = items.reduce((sum, i) => sum + (i.cost * i.quantity), 0);
  
  /**
   * Alternative calculation breakdown (for clarity):
   * items.reduce((accumulator, currentItem) => {
   *   return accumulator + (currentItem.cost * currentItem.quantity)
   * }, 0);
   */

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      
      {items.length > 0 ? (
        <>
          {/* Render each cart item */}
          {items.map(item => <CartItem key={item.id} item={item} />)}
          
          {/* Total cart amount - displays dynamically calculated sum */}
          <div className="cart-total-section">
            <h3 className="cart-total">Cart Total: <span className="total-amount">${total.toFixed(2)}</span></h3>
            <p className="total-items">Items in cart: {items.length}</p>
          </div>
          
          {/* Action buttons: Continue Shopping and Checkout */}
          <div className="cart-actions-buttons">
            <Link to="/products"><button className="btn">Continue Shopping</button></Link>
            <button className="btn primary">Checkout</button>
          </div>
        </>
      ) : (
        <p className="empty-cart">Your cart is empty. <Link to="/products">Start shopping!</Link></p>
      )}
    </div>
  );
}

function WelcomePage() {
  return (
    <div className="welcome-section background-image">
      <div className="welcome-content">
        <h1 className="welcome-title">Welcome to Paradise Nursery</h1>
        <p className="welcome-subtitle">Discover the Perfect Plants for Your Home</p>
        <Link to="/products">
          <button className="btn primary get-started-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  const items = useSelector(state => state.cart.items);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/products">Products</Link> | 
        <Link to="/cart">Cart ({count})</Link>
      </nav>

      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}
