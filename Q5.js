function pair(arr) {
    let max = arr[0]*arr[1];
    for (let i = 1;i<arr.length-1;i++) {
        const product =arr[i]*arr[i + 1];
        if (product>max) {
            max=product;
        }
    }   
    return max;
}
const arr=[3, 6, -2, -5, 7, 3];
console.log(pair(arr)); 
