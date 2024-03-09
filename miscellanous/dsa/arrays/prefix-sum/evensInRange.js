function getEvensInRange(A, B) {
  // prefix sum of L to R is = pf(R) - pf(L-1) if L!=0
  // we will convert the original array 0s and 1s
  // 0 @ A[i] if its odd else 1
  // now create a prefix sum array of above array
  // to count even numbers in range L to R
  // apply the prefix sum formula on the array of prefix sum

  for (let i = 0; i < A.length; i++) A[i] = Number(A[i]) % 2 === 0 ? 1 : 0;

  const prefixSum = [];
  prefixSum[0] = A[0];
  for (let i = 1; i < A.length; i++)
    prefixSum[i] = Number(prefixSum[i - 1]) + Number(A[i]);

  const Q = B.length;
  const result = [];

  for (let i = 0; i < Q; i++) {
    const L = B[i][0];
    const R = B[i][1];

    
    let sum = prefixSum[L];
    if(L === 0) sum = prefixSum[R];
    else sum = prefixSum[R] - prefixSum[L-1];

    result.push(sum);
  }

  return result;
}
console.log(getEvensInRange([1, 2, 3, 4, 5], [[0, 2],[2, 4],[1, 4]]));
console.log(getEvensInRange([2, 1, 8, 3, 9, 6], [[0, 3],[3, 5],[1, 3],[2, 4]]));


