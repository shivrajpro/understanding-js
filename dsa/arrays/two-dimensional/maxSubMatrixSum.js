// https://www.scaler.com/academy/mentee-dashboard/class/75650/assignment/problems/20177?navref=cl_tt_lst_sl

function getMaxSubMatrixSum(A) {
  let n = A.length - 1;
  let m = A[0].length - 1;
  let max_sum = A[n][m];
  let prefix = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      prefix[i][j] = A[i][j];
    }
  }

//   console.log("pf", prefix);
  for (let r = n - 1; r >= 0; r--) {
    prefix[r][m] += prefix[r + 1][m];
    max_sum = Math.max(max_sum, prefix[r][m]);
  }
//   console.log("pf", prefix);

  for (let c = m - 1; c >= 0; c--) {
    prefix[n][c] += prefix[n][c + 1];
    max_sum = Math.max(max_sum, prefix[n][c]);
  }
//   console.log("pf", prefix);

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      prefix[i][j] +=
        prefix[i + 1][j] + prefix[i][j + 1] - prefix[i + 1][j + 1];
      max_sum = Math.max(max_sum, prefix[i][j]);
    }
  }
//   console.log("pf", prefix);

  return max_sum;
}

console.log(
  getMaxSubMatrixSum([
    [1, 2],
    [3, 4],
  ])
);
