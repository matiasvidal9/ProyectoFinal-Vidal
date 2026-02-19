import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../mock/mockData";
import ItemList from "./ItemList";
import { db } from "../services/config"; // Tu archivo de config
import { collection, addDoc } from "firebase/firestore";
import { products } from "../mock/mockData"; // Tu array actual

const uploadBatch = () => {
    const itemsCollection = collection(db, "items");

    products.forEach((prod) => {
        // Quitamos el ID manual del mock porque Firebase genera uno propio
        const { id, ...dataWithoutId } = prod; 
        addDoc(itemsCollection, dataWithoutId)
            .then((docRef) => {
                console.log("Producto subido con ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error al subir: ", error);
            });
    });
};

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
export { uploadBatch };