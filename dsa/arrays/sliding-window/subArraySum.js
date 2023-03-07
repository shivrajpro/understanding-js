/*
Given an array A of length N. Also given are integers B and C.
Return 1 if there exists a subarray with length B having sum C and 0 otherwise
*/

/*
Input 1:
A = [4, 3, 2, 6, 1]
B = 3
C = 11
Output 1:
1
Explanation 1:
The subarray [3, 2, 6] is of length 3 and sum 11.

Input 2:
A = [4, 2, 2, 5, 1]
B = 4
C = 6

Output 2:
0
There are no such subarray.
*/
function subArraySum(A, B, C) {
  const n = A.length;
  const pf = [A[0]];

  for (let i = 1; i < A.length; i++) pf[i] = pf[i - 1] + A[i];

  let s = 0,
    e = B - 1;
  while (e < n) {
    const sum = s === 0 ? pf[e] : pf[e] - pf[s - 1];

    if (sum === C) return 1;

    s++;
    e++;
  }

  return 0;
}

console.log(subArraySum([4, 3, 2, 6, 1], 3, 11));//1
console.log(subArraySum([4, 2, 2, 5, 1], 4, 6));//0
console.log(subArraySum([ 6, 3, 3, 6, 7, 8, 7, 3, 7 ], 2, 10));//1
console.log(subArraySum([ 6 ], 1, 6));//1
