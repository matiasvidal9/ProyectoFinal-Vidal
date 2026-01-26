const products = [
    { id: 1, name: "Buzo Oversize", price: 25000, category: "men", stock: 10, img: "../public/men/Buzo1-men.png" },
    { id: 2, name: "Remera Oversize", price: 45000, category: "men", stock: 5, img: "../public/men/Remera1-men.png" },
    { id: 3, name: "Jean Recto", price: 12000, category: "men", stock: 15, img: "../public/men/Jean1-men.png" },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1500); 
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find(prod => prod.id === parseInt(productId));
            resolve(product);
        }, 1500);
    });
};