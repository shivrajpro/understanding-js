// https://www.scaler.com/academy/mentee-dashboard/class/59883/homework/problems/1054?navref=cl_tt_lst_sl
// You are given a string S, and you have to find all the amazing substrings of S.
// An amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).

// Input
// Only argument given is string S.
// Output
// Return a single integer X mod 10003, here X is the number of Amazing Substrings in given the string.

// ABEC ==> 6
// Explanation
//     Amazing substrings of given string are : A, AB, ABE, ABEC, E, EC
//     here number of substrings are 6 and 6 % 10003 = 6.

// MY APPROACH - giving wrong answer
function getAmazingSubArr(A) {
  const VOWELS = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  const substrings = [];
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    const c = A[i].toLowerCase();
    if (VOWELS.indexOf(c) !== -1) {
      for (let j = i + 1; j <= A.length; j++) {
        count++;
        substrings.push(A.substring(i, j));
      }
    }
    // console.log(substrings);
  }
  return count % 10003;
}

console.log(getAmazingSubArr("ABEC"));
console.log(getAmazingSubArr("BEC"));
console.log(getAmazingSubArr("amazing"));
// console.log(
//   getAmazingSubArr(
//     "pGpEusuCSWEaPOJmamlFAnIBgAJGtcJaMPFTLfUfkQKXeymydQsdWCTyEFjFgbSmknAmKYFHopWceEyCSumTyAFwhrLqQXbWnXSn"
//   )
// );

// chatGPT solution
function getAmazSubArr(A) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const amazingSubstrings = [];
//   console.log(S);
  for (let i = 0; i < A.length; i++) {
    if (vowels.has(A[i])) {
      for (let j = i + 1; j <= A.length; j++) {
        // console.log(S.substring(i, j),'i=',i,'j=',j);
        amazingSubstrings.push(A.substr(i, j)); //index j is excluded for substr
      }
    }
  }
  return amazingSubstrings.length % 10003;
}

// console.log(getAmazSubArr("ABEC"));
// console.log(getAmazSubArr("ABAB"));
