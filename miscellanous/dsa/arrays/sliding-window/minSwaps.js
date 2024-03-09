// https://www.scaler.com/academy/mentee-dashboard/class/59885/assignment/problems/4033?navref=cl_tt_lst_sl

/*
Given an array of integers A and an integer B, 
find and return the minimum number of swaps required to bring 
all the numbers less than or equal to B together.
*/

/*
 A = [1, 12, 10, 3, 14, 10, 5]
 B = 8
 2

Explanation 1:

 A = [1, 12, 10, 3, 14, 10, 5]
 After swapping  12 and 3, A => [1, 3, 10, 12, 14, 10, 5].
 After swapping  the first occurence of 10 and 5, A => [1, 3, 5, 12, 14, 10, 10].
 Now, all elements less than or equal to 8 are together.


 A = [5, 17, 100, 11]
 B = 20
 1
Explanation 2:
 A = [5, 17, 100, 11]
 After swapping 100 and 11, A => [5, 17, 11, 100].
 Now, all elements less than or equal to 20 are together. 
 */

function getMinSwaps(A, B) {
  const n = A.length;
  let k = 0;

  //count good elements first (good element is a number <= B)
  for (let i = 0; i < n; i++) if (A[i] <= B) k++;

  //we need this count to handle the edge case
  //also k denotes the length of possible max sub array
  if (k === 0 || k === 1) return 0;

  let bad = 0;
  for (let i = 0; i < k; i++) if (A[i] > B) bad++;

  let s = 1;
  let e = k;
  let ans = bad; //no. of bad elements = no. of swaps needed

  while (e < n) {
    if (A[s - 1] > B) bad--; //bad element going from subarray (window)
    if (A[e] > B) bad++; //bad element coming in the subarray (window)

    if(bad < ans) ans = bad; 

    s++;
    e++;
  }

  return ans;
}

console.log(getMinSwaps([1, 12, 10, 3, 14, 10, 5], 8));
console.log(getMinSwaps([5, 17, 100, 11], 20));
console.log(getMinSwaps([ 52, 7, 93, 47, 68, 26, 51, 44, 5, 41, 88, 19, 78, 38, 17, 13, 24, 74, 92, 5, 84, 27, 48, 49, 37, 59, 3, 56, 79, 26, 55, 60, 16, 83, 63, 40, 55, 9, 96, 29, 7, 22, 27, 74, 78, 38, 11, 65, 29, 52, 36, 21, 94, 46, 52, 47, 87, 33, 87, 70 ], 19));