import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../css/CartWidget.css';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    
    const quantity = totalQuantity();

    if (quantity === 0) {
        return null;
    }

    return (
        <Link to="/cart" className="CartWidget">
            <span style={{ fontSize: '1.5rem' }} role="img" aria-label="carrito">
                🛒
            </span> 
            <span className="CartBadge">{quantity}</span>
        </Link>
    );
};

export default CartWidget;