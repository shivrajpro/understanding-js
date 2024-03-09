// https://www.scaler.com/academy/mentee-dashboard/class/75601/assignment/problems/47?navref=cl_tt_lst_sl

function getRainWaterTrapped(A) {
  let n = A.length;
  let pf = new Array(n).fill(0);
  let sf = new Array(n).fill(0);

  for (let i = 1; i < n; i++) {
    pf[i] = Math.max(pf[i - 1], A[i - 1]);
  }

  for (let i = n - 2; i >= 0; i--) {
    sf[i] = Math.max(sf[i + 1], A[i + 1]);
  }

  let sum = 0;
  let temp = 0;

  for (let i = 0; i < n; i++) {
    temp = Math.min(pf[i], sf[i]) - A[i];
    if (temp > 0) sum += temp;
  }

  return sum;
}

console.log(getRainWaterTrapped([0, 1, 0, 2]));
console.log(getRainWaterTrapped([1, 2]));
