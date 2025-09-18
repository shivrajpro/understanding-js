//1. reverse array with recursion
const arr = [9, 4, 3, 5, 2, 6];
function reverse(l, r) {
    if (l >= r) return;
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;

    reverse(l + 1, r - 1);
}

// reverse(0, arr.length - 1);
// console.log(arr);

//2. approach 2 to reverse array with recursion
function reverse2(i, arr, n) {
    if (i >= n / 2) return;
    let temp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = temp;
    reverse2(i + 1, arr, n);
}

reverse2(0, arr, 6);
console.log(arr);

//3. check if string is palindrome using recursion
// str = "acca"
//        i
// check if str[i]!=str[str.len-i-1] return false else true

function isPalindrome(i, str) {
    if (i >= str.length / 2) return true;
    if (str[i] !== str[str.length - i - 1]) return false;

    return isPalindrome(i + 1, str);
}

console.log(isPalindrome(0, "madam"));
console.log(isPalindrome(0, "abc"));
console.log(isPalindrome(0, "racecar"));

//multiple recursion calls
//4. Get the Nth fibonacci number using recursion
// fibonacci series: 0 1 1 2 3 5 8 13 21

function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(8));
