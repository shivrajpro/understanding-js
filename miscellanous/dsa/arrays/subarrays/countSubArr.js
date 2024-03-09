// https://www.scaler.com/academy/mentee-dashboard/class/59869/homework/problems/16089?navref=cl_tt_lst_sl

function countSubArr(A, B) {
  let count = 0;
  const pf = [A[0]];
  const n = A.length;

  for (let i = 1; i < n; i++) pf[i] = pf[i - 1] + A[i];

  for (let l = 0; l < n; l++) {
    for (let r = l; r < n; r++) {
      let sum = pf[r] - pf[l - 1];
      if (l === 0) sum = pf[r];
      if (sum < B) count++;
    }
  }
  return count;
}

console.log(countSubArr([2, 5, 6], 10));
console.log(countSubArr([1, 11, 2, 3, 15], 10));
