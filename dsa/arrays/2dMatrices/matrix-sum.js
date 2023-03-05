// https://www.scaler.com/academy/mentee-dashboard/class/59857/homework/problems/11616?navref=cl_tt_lst_sl

function addMatrices(A, B) {
  const row = A.length;
  const col = A[0].length;

  const result = new Array(col).fill(0).map(() => new Array(row).fill(0));

  console.log('result',result);
  return result;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      result[i][j] = A[i][j] + B[i][j];
    }
  }
  return result;
}

console.log(
  addMatrices(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [9, 8, 7],
      [6, 5, 4],
      [3, 2, 1],
    ]
  )
);
