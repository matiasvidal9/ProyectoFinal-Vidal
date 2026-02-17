import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import "../css/ItemDetail.css";

const ItemDetail = ({ item }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

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
                    Stock disponible: {item.stock} unidades
                </div>
                
                <footer className="ItemFooter">
                    {
                        quantityAdded > 0 ? (
                            <div className="after-add-container">
                                <p>¡Agregaste {quantityAdded} unidad(es) al carrito!</p>
                                <div className="buttons-group">
                                    <Link to="/cart" className="btn-finish">
                                        Terminar mi compra
                                    </Link>
                                    <Link to="/" className="btn-continue">
                                        Seguir comprando
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <ItemCount initial={1} stock={item.stock} onAdd={handleOnAdd} />
                        )
                    }
                </footer>
            </div>
        </article>
    );
};

export default ItemDetail;