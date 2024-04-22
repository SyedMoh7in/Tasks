function palindrome(input) {
    const ans = input.split('').reverse().join('');
    return input === ans;
}
console.log(palindrome("abac")); 
console.log(palindrome("a")); 



