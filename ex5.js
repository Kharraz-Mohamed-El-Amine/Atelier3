const products = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 }
];

console.log("produits originaux");
console.log(products);

const calculateTotalTTC = (products, tva = 0.2) => {
    return products
        .map(product => product.price)
        .map(price => price * (1 + tva))
        .reduce((acc, price) => acc + price, 0);
};

const total = calculateTotalTTC(products);
console.log("Total TTC :", total.toFixed(2), "DH");

