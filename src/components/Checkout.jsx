import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
    const [orderId, setOrderId] = useState(null);
    const [buyer, setBuyer] = useState({
        name: '',
        phone: '',
        email: '',
        emailConfirm: ''
    });

    const { cart, totalPrice, clearCart } = useContext(CartContext);

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (buyer.email !== buyer.emailConfirm) {
            alert("Los emails no coinciden");
            return;
        }

        // Aquí es donde luego conectaremos con Firebase. 
        // Por ahora simulamos un ID de orden.
        const idGenerated = "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase();
        setOrderId(idGenerated);
        clearCart();
    };

    const order = {
            buyer: { name: buyer.name, phone: buyer.phone, email: buyer.email },
            items: cart,
            total: totalPrice(),
            date: new Date()
        };

    if (cart.length === 0) {
        return (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h1>No tienes productos en el carrito</h1>
                <Link to="/" className="btn-finish">Ver catálogo</Link>
            </div>
        );
    }

    return (
        <div className="checkout-container" style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
            <h2>Datos de contacto</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input 
                    type="text" name="name" placeholder="Nombre y Apellido" 
                    onChange={handleInputChange} value={buyer.name} required 
                />
                <input 
                    type="tel" name="phone" placeholder="Teléfono de contacto" 
                    onChange={handleInputChange} value={buyer.phone} required 
                />
                <input 
                    type="email" name="email" placeholder="Tu email" 
                    onChange={handleInputChange} value={buyer.email} required 
                />
                <input 
                    type="email" name="emailConfirm" placeholder="Confirma tu email" 
                    onChange={handleInputChange} value={buyer.emailConfirm} required 
                />
                
                <div style={{ borderTop: '1px solid #ccc', paddingTop: '10px', marginTop: '10px' }}>
                    <h3>Total a pagar: ${totalPrice()}</h3>
                </div>
                
                <button type="submit" className="btn-finish" style={{ cursor: 'pointer' }}>
                    Confirmar Compra
                </button>
            </form>
        </div>
    );
};

export default Checkout;