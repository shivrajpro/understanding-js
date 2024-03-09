// https://www.scaler.com/academy/mentee-dashboard/class/59861/homework/problems/27776?navref=cl_tt_lst_sl

function getCount(A) {
  const mod = 10e9;
  let count = 0;
  const pf = [A[0]];

  for (let i = 1; i < A.length; i++) pf[i] = pf[i - 1] + A[i];

  //   console.log(pf);
  for (let l = 0; l < A.length; l++) {
    for (let r = l; r < A.length; r++) {
      let sum = 1;
      if (l === 0) sum = pf[r];
      else sum = pf[r] - pf[l - 1];

      if (sum === 0) count++;
    }
  }
//   console.log("res", count);
  return count;
}

// console.log(getCount([1, -1, -2, 2]));
// console.log(getCount([-1, 2, -1]));
console.log(getCount([-1, 8, -4, 7, -4, 0, -8, -2, -7]));
