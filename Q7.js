function palindrome(input) {
    const ans = input.split('').reverse().join('');
    return input === ans;
}
console.log(palindrome("aabaa"));
console.log(palindrome("abac")); 
console.log(palindrome("a")); 

//Method 2:
function palindrome(input) {
    const ans = input.split('').reverse().join('');
    {
if(input==ans)
{
    return true;
}
else{
    return false;
}
}
}
console.log(palindrome("aabaa"));
console.log(palindrome("abac")); 
console.log(palindrome("a")); 



