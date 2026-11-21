import { useDispatch } from "react-redux";
import {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
} from "../redux/actions/cartActions";

function CartItem({ item }) {
    const dispatch = useDispatch();
    const itemSubtotal = item.price * item.quantity;

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>Unit Price: ₦{item.price.toLocaleString()}</p>
                <p>Subtotal: ₦{itemSubtotal.toLocaleString()}</p>
            </div>
            <div className="cart-item-actions">
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove
                </button>
            </div>
        </div>
    );
}

export default CartItem;