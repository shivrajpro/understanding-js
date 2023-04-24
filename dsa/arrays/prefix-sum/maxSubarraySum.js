function getMaxSubArraySum(A) {
  let maxSum = -999990;
  let sum = 0;

  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    maxSum = Math.max(sum, maxSum);
    if (sum < 0) sum = 0;
  }

  return maxSum;
}

console.log(getMaxSubArraySum([1, 2, 3, 4, -10] ));
console.log(getMaxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4] ));
