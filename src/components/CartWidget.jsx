import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../css/CartWidget.css';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    const quantity = totalQuantity();

    return (
        <Link to="/cart" className="CartWidget" style={{ display: quantity > 0 ? 'block' : 'none' }}>
            <span style={{fontSize: '1.5rem'}}>🛒</span> 
            <span className="CartBadge">{quantity}</span>
        </Link>
    );
};

export default CartWidget;