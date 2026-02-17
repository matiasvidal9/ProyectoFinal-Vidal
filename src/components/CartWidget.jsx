import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../css/CartWidget.css";
import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    return (
        <div className="cart-widget">
            <span className="cart-icon"><BsCart4 /></span>
            <span className="cart-notification">{totalQuantity}</span> 
        </div>
    );
};

export default CartWidget;