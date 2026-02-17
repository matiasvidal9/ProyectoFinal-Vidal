import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalPrice, removeItem } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h1>Tu carrito está vacío</h1>
                <Link to="/" className="btn-finish" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '20px' }}>
                    Ir a ver productos
                </Link>
            </div>
        );
    }

    return (
        <div className="cart-container" style={{ padding: '20px' }}>
            <h1>Tu Carrito</h1>
            <div className="cart-list">
                {cart.map(prod => (
                    <div key={prod.id} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ccc', padding: '10px 0', alignItems: 'center' }}>
                        <img src={prod.img} alt={prod.name} style={{ width: '80px' }} />
                        <div>
                            <h3>{prod.name}</h3>
                            <p>Cantidad: {prod.quantity}</p>
                            <p>Precio Unitario: ${prod.price}</p>
                        </div>
                        <div>
                            <p>Subtotal: ${prod.price * prod.quantity}</p>
                            <button onClick={() => removeItem(prod.id)} style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '30px', textAlign: 'right' }}>
                <h2>Total de la compra: ${totalPrice()}</h2>
                <button onClick={clearCart} style={{ marginRight: '15px', padding: '10px 20px', cursor: 'pointer' }}>
                    Vaciar Carrito
                </button>
                <Link to="/checkout" className="btn-finish" style={{ textDecoration: 'none', padding: '10px 20px' }}>
                    Finalizar Compra
                </Link>
            </div>
        </div>
    );
};

export default Cart;