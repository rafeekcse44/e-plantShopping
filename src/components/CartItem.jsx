import { useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/CartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} width="80" />
      <div className="cart-body">
        <h4>{item.name}</h4>
        <p>Unit: ${item.cost}</p>
        <p>Total: ${item.cost * item.quantity}</p>
      </div>
      <div className="cart-actions">
        <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
        <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
        <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
      </div>
    </div>
  );
}
