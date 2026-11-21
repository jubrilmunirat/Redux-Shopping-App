import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

function Cart() {
    const cartItems = useSelector((state) => state.cartItems);

    if (cartItems.length === 0) {
        return (
            <section className="cart-empty">
                <h2>Your Cart is Empty</h2>
                <p>Add some items from the store to get started.</p>
                <Link to="/">Browse Products</Link>
            </section>
        );
    }

    return (
        <section className="cart-page">
            <div className="cart-items-list">
                <h2>Shopping Cart</h2>
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <CartSummary />
        </section>
    );
}

export default Cart;