function getIndex(A, K) {
  let index = 0;
  let sum = 0;
  for (let i = 0; i < K; i++) sum += A[i];

  let s = 1;
  let e = K;
  let ans = sum;

  while (e < A.length) {
    sum = sum - A[s - 1] + A[e];

    if (sum < ans) {
      ans = sum;
      index = s;
    }
    s++;
    e++;
  }
  return index;
}

// console.log("index=", getIndex([1, 2, 3], 2)); //0
// console.log("index=", getIndex([3, 7, 90, 20, 10, 50, 40], 3)); //3
// console.log("index=", getIndex([3, 7, 5, 20, -10, 0, 12], 2)); // 4
// console.log("index=", getIndex([ 18, 11, 16, 19, 11, 9, 8, 15, 3, 10, 9, 20, 1, 19 ], 1)); //12
//                             0  1   2   3  4  5  6   7   8  9  10 11 12 13 14
console.log("index=",getIndex([15, 7, 11, 7, 9, 8, 18, 1, 16, 18, 6, 1, 1, 4, 18], 6)); //9
