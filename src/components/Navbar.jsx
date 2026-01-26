import { NavLink, Link } from "react-router-dom";
import "../css/Navbar.css";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* 1. Elemento Izquierda */}
            <Link to="/" className="navbar-logo">
                <h1>look</h1>
            </Link>

            {/* 2. Elemento Centro */}
            <ul className="navbar-links">
                <li><NavLink to="/category/men">Men</NavLink></li>
                <li><NavLink to="/category/women">Women</NavLink></li>
                <li><NavLink to="/category/accessories">Accessories</NavLink></li>
            </ul>

            {/* 3. Elemento Derecha */}
            <div className="cart-container">
                <CartWidget />
            </div>
        </nav>
    );
};

export default Navbar;