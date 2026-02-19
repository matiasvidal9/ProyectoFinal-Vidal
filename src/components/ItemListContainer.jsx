import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../mock/mockData";
import ItemList from "./ItemList";
import { collection } from "firebase/firestore";

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

    const subirData = () => {
        console.log("Subiendo data a Firebase...");
        // Aquí podrías llamar a una función que suba los productos a Firebase
        const colASubir = collection(db, "products");
        products.map((prod) => 
            addDoc(colASubir, prod))
        }

    return (
        <div className="item-list-container">
            <ItemList products={products} />
            <button onClick={subirData}>SUBIR DATA</button>
        </div>
    );
};
export default ItemListContainer;