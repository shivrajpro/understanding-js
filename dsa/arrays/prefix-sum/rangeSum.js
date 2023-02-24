// https://www.scaler.com/academy/mentee-dashboard/class/59874/assignment/problems/15991?navref=cl_tt_lst_sl

function rangeSum(A, B) {
  let M = B.length;

  const result = [];
  const prefixSum = [];
  prefixSum[0] = A[0];

  for (let i = 1; i < A.length; i++) prefixSum[i] = prefixSum[i - 1] + A[i];

//   console.log(A);
//   console.log(B);
  console.log(prefixSum);
  for (let i = 0; i < M; i++) {
    const L = B[i][0];
    const R = B[i][1];

    let sum = prefixSum[L];
    if(L === 0) sum = prefixSum[R];
    else sum = prefixSum[R] - prefixSum[L-1];

    result.push(sum);
  }

  return result;
}

console.log(rangeSum([1, 2, 3, 4, 5], [[0, 3], [1, 2]]));
// console.log(rangeSum([2, 2, 2],[[0, 0], [1, 2]]));
