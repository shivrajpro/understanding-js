function getMaxAbsDiff(A) {
  let n = A.length;

  let max1 = max2 = Number.MIN_SAFE_INTEGER;
  let min1 = min2 = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    max1 = Math.max(max1, A[i] + i);
    max2 = Math.max(max2, A[i] - i);

    min1 = Math.min(min1, A[i] + i);
    min2 = Math.min(min2, A[i] - i);
  }

  let maxDiff = Math.max(max1 - min1, max2 - min2);

  return maxDiff;
}

console.log(getMaxAbsDiff([1, 3, -1]));
console.log(getMaxAbsDiff([2]));
