import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
    const cartItems = useSelector((state) => state.cartItems);

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <nav className="navbar">
            <div className="brand">Munny's Store</div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/cart">
                    Cart <span className="badge">{totalItems}</span>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;