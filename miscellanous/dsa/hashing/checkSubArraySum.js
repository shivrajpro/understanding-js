// https://www.scaler.com/academy/mentee-dashboard/class/59875/homework/problems/4116?navref=cl_tt_lst_sl

function hasSubarrayWithSum(a, b) {
  const pf = [a[0]];
  for (let i = 1; i < a.length; i++) pf[i] = pf[i - 1] + a[i];

  let L = -1;
  let R = -1;
  for (let l = 0; l < pf.length; l++) {
    let sumFound = false;
    for (let r = 0; r < pf.length; r++) {
      let sum = pf[r];
      if (l > 0) sum = pf[r] - pf[l - 1];

      if (sum == b) {
        sumFound = true;
        L = l;
        R = r;
        break;
      }
    }

    if (sumFound) break;
  }

  const result = [];
  if (L != -1) {
    for (let i = L; i <= R; i++) result.push(a[i]);
    return result;
  }
  return -1;
}

// console.log(hasSubarrayWithSum([1, 2, 3, 4, 5], 5)); //[2,3]
// console.log(hasSubarrayWithSum([5, 10, 20, 100, 105], 110)); //-1
console.log(hasSubarrayWithSum([5, 10, 20, 100, 105], 110)); //-1
