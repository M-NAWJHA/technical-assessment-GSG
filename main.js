(function () {
    // handel Total Price for the product
    var handelTotalPrice = function (arrProduct) {
        return arrProduct.reduce(function (total, product) { return total + product.price; }, 0);
    };
    // array of products
    var myProducts = [
        { name: 'car red', price: 10 },
        { name: 'car blue', price: 20 },
        { name: 'car black', price: 30 },
    ];
    console.log("Total Price ".concat(handelTotalPrice(myProducts)));
})();
