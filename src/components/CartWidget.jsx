import "../css/CartWidget.css";
import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
    return (
        <div className="cart-widget">
        <span className="cart-icon"><BsCart4 /></span>
        <span className="cart-notification">3</span> 
        </div>
    );
};

export default CartWidget;