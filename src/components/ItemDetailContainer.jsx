import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { getProducts } from "../mock/mockData";
import ItemDetail from "./ItemDetail"; 

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams(); 

    useEffect(() => {
        setLoading(true);
        
        getProducts()
            .then(res => {
                const productFound = res.find(prod => prod.id === parseInt(itemId));
                setItem(productFound);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]); 

    if (loading) {
        return <h2 style={{textAlign: 'center', marginTop: '50px'}}>Cargando detalle...</h2>;
    }

    return (
        <div className="item-detail-container">
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;