import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import "../css/ItemDetail.css";

const ItemDetail = ({ item }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem, getProductQuantity } = useContext(CartContext);


    const cartQuantity = getProductQuantity(item.id);
    const availableStock = item.stock - cartQuantity;

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        addItem(item, quantity);
    };

    return (
        <article className="item-detail-view">
            <div className="detail-img-container">
                <img src={item.img} alt={item.name} />
            </div>
            <div className="detail-info">
                <span className="detail-category">{item.category}</span>
                <h1>{item.name}</h1>
                <p className="detail-price">${item.price}</p>
                <p className="detail-description">
                    Calidad premium y diseño exclusivo para esta temporada.
                </p>
                <div className="detail-stock">
                {availableStock > 0 
                    ? `Stock disponible: ${availableStock} unidades` 
                    : "No queda stock disponible (ya está en tu carrito)"}
                </div>
            
                    <footer className="ItemFooter">
                        {quantityAdded > 0 ? (
                            <Link to="/cart" className="btn-finish">Terminar compra</Link>
                        ) : (
                            <ItemCount 
                                initial={availableStock > 0 ? 1 : 0} 
                                stock={availableStock} 
                                onAdd={handleOnAdd} 
                            />
                        )}
                    </footer>
            </div>
        </article>
    );
};

export default ItemDetail;