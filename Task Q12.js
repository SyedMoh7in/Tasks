let Products=['eggs', 'milk', 'cheese'];
let productPrices=[2.89, 3.29, 5.79];
let productSold=['eggs', 'eggs', 'cheese', 'milk'];
let soldPrice=[2.89, 2.99, 5.97, 3.29];
let c=1;
for(let i=0;i<soldPrice.length;i++)
{
    let solditems=Products.indexOf(productSold[i]);
    if(solditems!==-1)
    {
        let realprice=productPrices[solditems];
        const solditemm=soldPrice[i];
        if(realprice !==solditemm)
        {
        console.log(productSold[i]+" has the price of:"+solditemm);
        }
    }
}
