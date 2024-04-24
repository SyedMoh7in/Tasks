function wrong(Products, productPrices, productSold, soldPrice) {
    let c = 0;

    for (let i = 0; i < productSold.length; i++) {
        const soldItemIndex = Products.indexOf(productSold[i]);
        if (soldItemIndex !== -1) {
            const actualPrice = productPrices[soldItemIndex];
            const soldItemPrice = soldPrice[i];
            if (actualPrice !== soldItemPrice) {
                console.log(`${productSold[i]} has ${soldItemPrice} price which is wrong`);
                c++;
            }
        }
    }
    return c;
}
let Products = ['eggs', 'milk', 'cheese'];
let productPrices = [2.89, 3.29, 5.79];
let productSold = ['eggs', 'eggs', 'cheese', 'milk'];
let soldPrice = [2.89, 2.99, 5.97, 3.29];
console.log(wrong(Products, productPrices, productSold, soldPrice));
