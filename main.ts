(() => {
    interface Product {
        name: string;
        price: number;
    }

    // handel Total Price for the product
    const handelTotalPrice = (arrProduct: Product[]) => {
        return arrProduct.reduce((total, product) => total + product.price, 0);
    };

    // array of products
    const myProducts: Product[] = [
        { name: 'car red', price: 10 },
        { name: 'car blue', price: 20 },
        { name: 'car black', price: 30 },
    ];


    console.log(`Total Price ${handelTotalPrice(myProducts)}`);
})();
