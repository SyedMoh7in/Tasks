function diff(arr) 
{
    let s1=0;
    let s2=0;
    
    for (let i=0;i<arr.length;i++) {
        s1=s1+arr[i][i];
        s2=s2+arr[i][arr.length-i-1];
    }   
    return Math.abs(s1-s2);
}
let matrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];
console.log(diff(matrix));  