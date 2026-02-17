import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../mock/mockData";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 
    const { categoryId } = useParams();

        useEffect(() => {
            setLoading(true);
            getProducts()
            .then(res => {
                if (categoryId) {
                    const filtered = res.filter(prod => prod.category === categoryId);
                    setProducts(filtered);
                } else {
                    setProducts(res); 
                }
            })
            .catch(err => console.error(err))
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    if (loading) {
        return <h2 style={{textAlign: 'center', marginTop: '50px'}}>Cargando productos...</h2>;
    }

    return (
        <div className="item-list-container">
            <ItemList products={products} />
        </div>
    );
};
export default ItemListContainer;