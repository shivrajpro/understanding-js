function getFreq(A, B) {
  const tracker = {};

  for (let i = 0; i < A.length; i++) {
    const num = A[i];

    if (!tracker[num]) tracker[num] = 1;
    else tracker[num]++;
  }

  const result = [];
  for (let i = 0; i < B.length; i++) {
    const freq = tracker[B[i]];
    if (!freq) result.push(0);
    else result.push(freq);
  }

  return result;
}

console.log(getFreq([1, 2, 1, 1], [1, 2]));
console.log(getFreq([2, 5, 9, 2, 8], [3, 2]));
