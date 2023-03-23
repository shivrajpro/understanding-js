// https://www.scaler.com/academy/mentee-dashboard/class/59868/homework/problems/10208?navref=cl_tt_lst_sl

function isAP(A) {
  A = A.sort((a, b) => a - b);
  if (A.length <= 1) return 1;
  console.log(A);
  for (let i = 0; i < A.length - 2; i++)
    if (A[i + 1] - A[i] !== A[i + 2] - A[i + 1]) return 0;
  return 1;
}

console.log(isAP([3, 5, 1]));
console.log(isAP([4, 1, 2]));
console.log(isAP([-113, -70, -14, -8, -29, 5, -94, -44, 23, 9, 13, -132, -14]));
console.log(isAP([1, 39, 324, 267, 96, 77, 248, 58, 229, -18, 191, 172, 134, 286, 305, 210, 115, 20, 153,]));
