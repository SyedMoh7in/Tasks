function rotation(arr, k){
    for(let i=0;i<k;i++)
    {
        let rotate=arr.pop();
        arr.unshift(rotate);
    }
    return arr;
  }
  const arr=[1,2,3,4,5,6,7];
  console.log(rotation(arr,k=3));
