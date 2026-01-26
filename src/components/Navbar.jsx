import { NavLink, Link } from "react-router-dom";
import "../css/Navbar.css";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Usamos navbar-logo para que coincida con tu CSS */}
            <Link to="/" className="navbar-logo">
                <h1>look</h1>
            </Link>

            <ul className="navbar-links">
                <li><NavLink to="/category/men">Men</NavLink></li>
                <li><NavLink to="/category/women">Women</NavLink></li>
                <li><NavLink to="/category/accessories">Accessories</NavLink></li>
            </ul>

            <CartWidget />
        </nav>
    );
};

export default Navbar;