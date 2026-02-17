import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../css/CartWidget.css";
import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    return (
        <Link to="/cart" className="CartWidget">
            <span style={{fontSize: '20px'}}>🛒</span> 
            <span className="CartBadge">{totalQuantity()}</span>
        </Link>
    );
};

export default CartWidget;