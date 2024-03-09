// https://www.scaler.com/academy/mentee-dashboard/class/59858/assignment/problems/12828?navref=cl_tt_lst_sl

// MAANG interview
function getSpecialIndex(A) {
  // prefix sum formula
  // pf[L -> R] = pf[R] - pf[L-1]

  // So = sum from o to i-1 + sum from i+1 to n-1
  // apply prefix sum formula
  // oddSum = pfo[i-1] + pfe[n-1] - pfe[i] //i+1-1
  // evenSum = pfe[i-1] + pfo[n-1] - pfo[i] //i+1-1
  
  const S = new Set([...A]);
  //EDGE CASE
  if (S.size == 1) return A.length;
  
  const n = A.length;
  const pfe = [A[0]];
  const pfo = [0];

  for (let i = 1; i < n; i++) {
    if (i % 2 == 0) pfe[i] = Number(pfe[i - 1]) + Number(A[i]);
    else pfe[i] = pfe[i - 1];
  }

  for (let i = 1; i < n; i++) {
    if (i % 2 !== 0) pfo[i] = Number(pfo[i - 1]) + Number(A[i]);
    else pfo[i] = pfo[i - 1];
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    const oddSum = i == 0 ? A[0] : pfo[i - 1] + pfe[n - 1] - pfe[i];
    const evenSum = i == 0 ? pfe[n - 1] : pfe[i - 1] + pfo[n - 1] - pfo[i];

    if (oddSum == evenSum) count++;

  }

  return count;
}

console.log(getSpecialIndex([2, 1, 6, 4]));
console.log(getSpecialIndex([1, 1, 1]));
