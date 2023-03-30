function getCommonElements(A, B) {
  const hash = {};

  for (let i = 0; i < A.length; i++) hash[A[i]] = (hash[A[i]] || 0) + 1;

  const result = [];
  for (let i = 0; i < B.length; i++) {
    if (hash[B[i]]) {
      result.push(B[i]);
      hash[B[i]]--;
    }
  }
  return result;
}

console.log(getCommonElements([1, 2, 2, 1], [2, 3, 1, 2]));
console.log(getCommonElements([2, 1, 4, 10], [3, 6, 2, 10, 10]));
