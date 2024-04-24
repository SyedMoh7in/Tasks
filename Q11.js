function calc(arr){
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for (let i=0;i<arr.length;i++)
    {
        let numbers=arr[i];
        if (numbers>0)
        {
             positive++;
         }
         else if (numbers<0)
         {
              negative++;
         }
         else
         {
             zero++;
         }
     }
     total = arr.length;
positive=positive/total;
negative=negative/total;
zero=zero/total;
console.log("Proportion of Positive Values:"+positive);
console.log("Propotion of Negative Values:"+negative);
console.log("Proportion of Zeros:"+zero);
}
calc([-4, 3, -9, 0, 4, 1]);