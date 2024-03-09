// https://www.scaler.com/academy/mentee-dashboard/class/59861/assignment/problems/11882?navref=cl_tt_lst_sl

function get1stRepeatingNum(A) {
  const tracker = {};

  for (let i = 0; i < A.length; i++) {
    const num = A[i];

    if (!tracker[num]) tracker[num] = 1;
    else tracker[num]++;
  }

  for (let i = 0; i < A.length; i++) if (tracker[A[i]] > 1) return A[i];
  // console.log(tracker);
  return -1;
}

console.log(get1stRepeatingNum([10, 5, 3, 4, 3, 5, 6]));
console.log(get1stRepeatingNum([1, 2, 3, 4]));
