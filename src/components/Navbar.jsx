import { NavLink, Link } from "react-router-dom";
import "../css/Navbar.css";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                <h1>look</h1>
            </Link>
            <ul className="navbar-links">
                <li><NavLink to="/category/Men">Men</NavLink></li>
                <li><NavLink to="/category/Women">Women</NavLink></li>
                <li><NavLink to="/category/Accessories">Accessories</NavLink></li>
            </ul>
            <div className="cart-container">
                <CartWidget />
            </div>
        </nav>
    );
};

export default Navbar;