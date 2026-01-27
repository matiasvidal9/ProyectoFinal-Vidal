import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../mock/mockData";
import ItemDetail from "./ItemDetail"; 

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams(); 

    useEffect(() => {
        getProductById(id).then((res) => setItem(res));
    }, [id]);

    if (!item) return <div className="loading">Cargando detalles del producto...</div>;

    return (
        <section className="detail-container">
            <ItemDetail item={item} />
        </section>
    );
};

export default ItemDetailContainer;