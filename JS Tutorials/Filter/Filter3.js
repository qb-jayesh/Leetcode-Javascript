

const products = [

    { name: "Product A", price: 100},
    { name: "Product B", price: 200},
    { name: "Product C", price: 300}

];

const filteredProducts = products.filter(product => product.price >= 10 && product.price <= 2000);

console.log(filteredProducts); 