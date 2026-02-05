import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function CartPage() {
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, i) => sum + i.cost * i.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.map(item => <CartItem key={item.id} item={item} />)}
      <h3>Total: ${total}</h3>
      <button>Continue Shopping</button>
      <button>Checkout</button>
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
        <Route path="/" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}
