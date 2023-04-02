// https://www.scaler.com/academy/mentee-dashboard/class/59875/assignment/problems/21202?navref=cl_tt_lst_sl

function hasTargetSum(a, b) {
  const set = new Set();

  for (let i = 0; i < b.length; i++) {
    const k = a - b[i];
    if (set.has(k)) return 1;

    set.add(b[i]);
  }
  return 0;
}

console.log(hasTargetSum(8, [3, 5, 1, 2, 1, 2]));
console.log(hasTargetSum(21, [9, 10, 7, 10, 9, 1, 5, 1, 5]));
