console.log("test");
//1. sum of numbers
function sum(a) {
  return function (b) {
    if (b !== undefined) return sum(a + b, b);
    return a;
  };
}
// console.log(sum(2)(0)());

//2. factorial
function factorial(n) {
  if (n === 1 || n === 0) return 1;
  return n * factorial(n - 1);
}
// console.log(factorial(3));

//3. fibonacci - 0,1,1,2,3,5,8,13...
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
// console.log(fib(2));

//4. prime - divisible by itself and 1. eg: 3,5,7,11
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
      break;
    }
  }
  return true;
}
// console.log(isPrime(4));

//5. palindrome: racecar, beb, not
function isPalindrome(s) {
  //   return  s.split("").reverse().join("") === s;
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - i - 1]) return false;
  }
  return true;
}
// console.log(isPalindrome("racecar"), isPalindrome("beb"), isPalindrome("not"));

//6. anagram: [listen, silent], [earth, heart]
function areAnagrams(s1, s2) {
  return s1.split("").sort().join("") === s2.split("").sort().join("");
}
// console.log(areAnagrams("listen","silent"), areAnagrams("earth","heart"), areAnagrams("listnen","silent"));

//7. titlecase or capitalize
function titlecase(str = "my nAme Is shiVRaj") {
  const words = str.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    const s = w[0].toUpperCase() + w.substring(1).toLowerCase();
    result.push(s);
  }
  return result.join(" ");
}
// console.log(titlecase("my nAme Is shiVRaj"));

//8. remove vowels
function removeVowels(str = "shivraj") {
  return str.replace(/[aeiou]/g, "");
  // traverse the string and skip vowels or just append consonants to result
}
// console.log(removeVowels());

//9. longest word in a string
function getLongestWord(str = "my nAme Is shiVRaj") {
  const words = str.split(" ");
  let maxLen = -9999;
  let maxInd = 0;
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (w.length > maxLen) {
      maxLen = w.length;
      maxInd = i;
    }
  }
  return words[maxInd];
}
// console.log(getLongestWord());

//10. union, intersection and difference of arrays
const a = [34, 35, 45, 48, 49];
const b = [48, 55, 34];

const union = [...new Set([...a, ...b])];
// console.log(union);

const intersection = a.filter((e) => b.indexOf(e) !== -1);
// console.log(intersection);

// a-b
const difference = a.filter(e=>b.indexOf(e) === -1);
// console.log(difference);

//11. flattening the array
function flattenArray(
  arr = [
    1,
    2,
    [4, 5, 6],
    [
      [3, 4],
      [7, 8],
    ],
  ]
) {
  const result = [];
  arr.forEach((a) => {
    if (Array.isArray(a)) return result.push(...flattenArray(a));
    result.push(a);
  });
  return result;
}
console.log(flattenArray());
