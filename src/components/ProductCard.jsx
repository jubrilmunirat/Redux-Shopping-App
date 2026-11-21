import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

function ProductCard({ product }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="category">{product.category}</p>
            <p className="description">{product.description}</p>
            <p className="price">₦{product.price.toLocaleString()}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductCard;