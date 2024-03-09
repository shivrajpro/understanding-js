// Given an array A and an integer B, find the number of occurrences of B in A.
// A = [1, 2, 2], B = 2  ==> 2
// A = [1, 2, 1], B = 3  ==> 0

function getOccurences(A, B) {
  let count = 0;
  for (let i = 0; i < A.length; i++)
    if (A[i] === B) count++;
  return count;
}

console.log(getOccurences([1, 2, 2], 2));
console.log(getOccurences([1, 2, 1], 3));
