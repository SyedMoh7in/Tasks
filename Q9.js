function duplicate(arr)
{
    let fruitBasket=[];
    for(let i=0;i<arr.length;i++)
    {
        const fruits=arr[i];
        if(fruitBasket[fruits])
        {
            fruitBasket[fruits]++;
        }
        else
        {
            fruitBasket[fruits]=1;
        }
    }
    return fruitBasket;
}
fruitBasket=['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
console.log(duplicate(fruitBasket));