import "../css/ItemDetail.css";

const ItemDetail = ({ item }) => {
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
                <button className="add-to-cart">Agregar al carrito</button>
            </div>
        </article>
    );
};

export default ItemDetail;