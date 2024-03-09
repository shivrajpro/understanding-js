// https://www.scaler.com/academy/mentee-dashboard/class/59857/assignment/problems/55?navref=cl_tt_lst_sl

function getReverse(a) {

//   return a;
}

function rotateMatrix(A) {
  // its a two step process
  // step 1: find the transpose
  // step 2: reverse each row

  const n = A.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const t = A[i][j];
      A[i][j] = A[j][i];
      A[j][i] = t;
    }
  }

  for (let i = 0; i < n; i++) {
    // A[i] = A[i].reverse();
    // const arr = A[i];
    getReverse(A[i]);
  }

  return A;
}

console.log(
  rotateMatrix([
    [1, 2],
    [3, 4],
  ])
);
