import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function CartPage() {
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, i) => sum + i.cost * i.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {items.length > 0 ? (
        <>
          {items.map(item => <CartItem key={item.id} item={item} />)}
          <h3>Total: ${total}</h3>
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
