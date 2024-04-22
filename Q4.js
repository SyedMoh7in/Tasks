function M(num)
{
    for(let i=1;i<=num;i++)
    {
        let out="";
        for(let j=num-i;j>0;j--)
        {
            out +=".";
        }
        for(let k=0;k<i;k++)
        {
            out+=i;
        }
        console.log(out);
    }
}
console.log(M(5));
