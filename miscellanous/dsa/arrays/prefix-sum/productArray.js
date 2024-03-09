// https://www.scaler.com/academy/mentee-dashboard/class/59874/homework/problems/4103?navref=cl_tt_lst_sl
// Given an array of integers A, find and return the product array of the same size
// where the ith element of the product array will be equal to the
// product of all the elements divided by the ith element of the array.

// Note: It is always possible to form the product array with integer (32 bit) values.
// Solve it without using the division operator.

// Input 1:
//     A = [1, 2, 3, 4, 5]
// Output 1:
//     [120, 60, 40, 30, 24]

// Input 2:
//     A = [5, 1, 10, 1]
// Output 2:
//     [10, 50, 5, 50]

function getProductArr(A) {
  const result = [];
  let prod = Number(A[0]);
  for (let i = 1; i < A.length; i++) prod *= Number(A[i]);

  for (let i = 0; i < A.length; i++) result.push(Number(prod) / Number(A[i]));

  return result;
}

console.log(getProductArr([1, 2, 3, 4, 5]));
console.log(getProductArr([5, 1, 10, 1]));
