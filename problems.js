//1. sum of numbers
function sum(a) {

    return function (b) {
        if (b)
            return sum(a + b);

        return a;
    }
}
// console.log(sum(1)(2)(3)(4)(5)());


//2. factorial
function fact(n) {
    if (n == 1)
        return n;

    return n * fact(n - 1);
}
// console.log(fact(4));


//3. fibonacci
function fib(n) {
    if (n == 1)
        return 1;

    return n + fib(n - 1);
}
// console.log(fib(5));


//4. prime
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        // const element = num[i];
        if (num % i == 0)
            return false;
    }

    return true;
}
// console.log(isPrime(11));


//5. palindrome
function isPalindrome(s1) {

    return s1.split("").reverse().join("") == s1;

    for (let i = 0; i < s1.length / 2; i++) {
        if (s1[i] != s1[s1.length - i - 1])
            return false;
    }

    return true;
}
// console.log(isPalindrome("new"));



//6. anagram
// https://examples.yourdictionary.com/anagram-examples.html
function isAnagram(str1, str2) {
    let tracker = {};

    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];

        if (!tracker[char])
            tracker[char] = 1;
        else
            tracker[char]++;
    }

    // console.log(tracker);

    for (let i = 0; i < str2.length; i++) {
        let char = str1[i];

        if (!tracker[char])
            return false;
        else
            tracker[char]--;
    }

    // console.log(tracker);

    let sum = Object.values(tracker).reduce((acc, val) => {
        return acc + val;
    }, 0);

    // console.log(sum);

    return sum == 0;
}
// console.log(isAnagram("arc", "car"));


//7. reverse words
function reverseString(str) {

    return str.split("").reverse().join("");

    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    return reverse;
}
// console.log(reverseString("new"));


//8. titlecase or capitalize
let titlecase = "my nAme iS shivraj".split(" ").map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(" ");
// console.log(titlecase);


//9. remove vowels
function removeVowels(str) {
    //using regex
    return str.replace(/[aeiou]/g, "");

    let result = "";

    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "a":
                break;
            case "e":
                break;
            case "i":
                break;
            case "o":
                break;
            case "u":
                break;

            default:
                result += str[i];
                break;
        }
    }

    return result;
}
// console.log(removeVowels("shivraj"));

//10. longest word in a string
function longestWord(str) {
    let words = str.split(" ");
    let maxLen = -999999;
    let result = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLen)
            result = words[i];
    }

    return result;
}
// console.log(longestWord("my nAme iS jarvihs shivraj"));

//11. union, intersection and difference of arrays
var a = [34, 35, 45, 48, 49];
var b = [48, 55, 34];
var union = [...new Set([...a, ...b])];
// console.log(union);

let intersection = a.filter((n) => b.indexOf(n) != -1)
// console.log(intersection);

//a-b
let difference = a.filter((n) => b.indexOf(n) == -1);

//b-a
// let difference = b.filter((n)=>a.indexOf(n)==-1);

// console.log(difference);
// 11. flatten this array: [1,2,[4,5,6], [[3,4], [7,8]]] => [1,2,4,5,6,3,4,7,8]
function flattenArray(arr) {
    const result = [];

    arr.forEach(e => {
        if(Array.isArray(e)){
            result.push(...flattenArray(e));
        }else{
            result.push(e);
        }
    });

    return result;
}

console.log('>> flattenArray([[1,2],3,[3,4]])',flattenArray([[1,2],3,[3,4]]));
console.log('>> flattenArray([1,2,[4,5,6], [[3,4], [7,8]]])',flattenArray([1,2,[4,5,6], [[3,4], [7,8]]]));