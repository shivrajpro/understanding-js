// Given an array A and an integer B. A pair(i, j) in the array is a good pair
// if i != j and (A[i] + A[j] == B). Check if any good pair exist or not.
// https://www.scaler.com/academy/mentee-dashboard/class/59879/assignment/problems/11160?navref=cl_tt_lst_sl

function hasGoodPair(A, B) {
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] + A[j] === B) return 1;
    }
  }
  return 0;
}

console.log(hasGoodPair([1, 2, 3, 4], 7));
console.log(hasGoodPair([1, 2, 4], 4));
console.log(hasGoodPair([1, 2, 2], 4));