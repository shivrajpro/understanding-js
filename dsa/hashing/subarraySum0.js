// https://www.scaler.com/academy/mentee-dashboard/class/59861/assignment/problems?navref=cl_tb_br

function hasSubArr(A) {
  // if a pf sum array includes 0 then there exists a subarray with sum 0
  // if any number is repeating in pf sum then there exists a subarray with sum 0
  const pf = [A[0]];

  for (let i = 1; i < A.length; i++) pf[i] = pf[i - 1] + A[i];

  if (pf.includes(0)) return 1;
  const set = new Set([...pf]);

  return pf.length === set.size ? 0 : 1;
}

console.log(hasSubArr([1, 2, 3, 4, 5]));//0
console.log(hasSubArr([-1, 1]));//1
