// https://www.scaler.com/academy/mentee-dashboard/class/59869/assignment/problems/16121?navref=cl_tt_lst_sl
// You are given an integer array C of size A. Now you need to
// find a subarray (contiguous elements) so that the sum of contiguous elements is maximum.
// But the sum must not exceed B

// Example Input
// Input 1:
// A = 5
// B = 12
// C = [2, 1, 3, 4, 5]
// Input 2:
// A = 3
// B = 1
// C = [2, 2, 2]
// Example Output
// Output 1:
// 12
// Output 2:
// 0

// Example Explanation
// Explanation 1:
// We can select {3,4,5} which sums up to 12 which is the maximum possible sum.
// Explanation 2:

// All elements are greater than B, which means we cannot select any subarray.
// Hence, the answer is 0.

function maxSubArrSum(A, B, C) {
  let maxSum = 0;
  for (let i = 0; i < C.length; i++) {
    let sum = 0;
    for (let j = i; j < C.length; j++) {
      sum += Number(C[j]);
      if (sum > maxSum && sum <= B) maxSum = sum;
    }
  }

  return maxSum;
}
console.log(maxSubArrSum(5, 12, [2, 1, 3, 4, 5]));
console.log(maxSubArrSum(3, 1, [2, 2, 2]));
