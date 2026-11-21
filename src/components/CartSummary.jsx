import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/actions/cartActions";

function CartSummary() {
    const cartItems = useSelector((state) => state.cartItems);
    const dispatch = useDispatch();
    const [checkedOut, setCheckedOut] = useState(false);

    const totalQuantity = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const handleCheckout = () => {
        dispatch(clearCart());
        setCheckedOut(true);
    };

    return (
        <aside className="cart-summary">
            <h3>Order Summary</h3>
            <p>Total Items: {totalQuantity}</p>
            <p>Subtotal: ₦{totalPrice.toLocaleString()}</p>
            <p>
                <strong>Total: ₦{totalPrice.toLocaleString()}</strong>
            </p>
            <div className="summary-actions">
                <button
                    onClick={() => {
                        setCheckedOut(false);
                        dispatch(clearCart());
                    }}
                    disabled={cartItems.length === 0}
                >
                    Clear Cart
                </button>
                <button onClick={handleCheckout} disabled={cartItems.length === 0}>
                    Checkout
                </button>
            </div>
            {checkedOut && (
                <p className="checkout-msg">Order placed successfully (demo).</p>
            )}
        </aside>
    );
}

export default CartSummary;