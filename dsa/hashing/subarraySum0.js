// https://www.scaler.com/academy/mentee-dashboard/class/59861/assignment/problems?navref=cl_tb_br

function hasSubArr(A) {
  const pf = [A[0]];

  for (let i = 1; i < A.length; i++) pf[i] = pf[i - 1] + A[i];

  if (pf.includes(0)) return 1;
  const set = new Set([...pf]);

  return pf.length === set.size ? 0 : 1;
}

console.log(hasSubArr([1, 2, 3, 4, 5]));//0
console.log(hasSubArr([-1, 1]));//1
