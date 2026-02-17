import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

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
        const idGenerated = Math.floor(Math.random() * 100000);
        setOrderId(idGenerated);
        clearCart();
    };

    if (orderId) {
        return (
            <div className="container mt-5 text-center">
                <h1>¡Gracias por tu compra!</h1>
                <p>Tu número de pedido es: <strong>{orderId}</strong></p>
            </div>
        );
    }

    if (cart.length === 0) {
        return <h1>No hay productos en el carrito para finalizar la compra</h1>;
    }

    return (
        <div className="container mt-5">
            <h2>Finalizar Compra</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre completo" onChange={handleInputChange} required className="form-control mb-2" />
                <input type="tel" name="phone" placeholder="Teléfono" onChange={handleInputChange} required className="form-control mb-2" />
                <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required className="form-control mb-2" />
                <input type="email" name="emailConfirm" placeholder="Confirmar Email" onChange={handleInputChange} required className="form-control mb-2" />
                
                <div className="total-checkout">
                    <h3>Total a pagar: ${totalPrice()}</h3>
                </div>
                
                <button type="submit" className="btn btn-primary">Generar Orden</button>
            </form>
        </div>
    );
};

export default Checkout;