// https://www.scaler.com/academy/mentee-dashboard/class/59879/homework/problems/9003?navref=cl_tt_lst_sl
// Given an integer array A of size N. In one second,
// you can increase the value of one element by 1.

// Find the minimum time in seconds to make all elements of the array equal.
// Example Input
// A = [2, 4, 1, 3, 2] ==> 8

function getTime(A) {
  const max = Math.max.apply(null, A);
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    let num = A[i];

    while (num != max) {
      num++;
      count++;
    }
  }
  return count;
}

console.log("count = ", getTime([2, 4, 1, 3, 2]));
