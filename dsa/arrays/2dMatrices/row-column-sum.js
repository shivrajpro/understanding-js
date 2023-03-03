// https://www.scaler.com/academy/mentee-dashboard/class/59857/assignment/problems/11433?navref=cl_tt_lst_sl

function columnSum(A) {
  const N = A.length;
  const M = A[0].length;
  const sumArr = [];
  // [00][10][12]||[10][11][12]
  for (let i = 0; i < M; i++) {
    let sum = 0;
    for (let j = 0; j < N; j++) sum += A[j][i];
    sumArr.push(sum);
  }

  return sumArr;
}

// console.log("sum=",columnSum([[1,2,3,4],[5,6,7,8],[9,2,3,4]])); ==>
function rowSum(A) {
  const N = A.length;
  const M = A[0].length;
  const sumArr = [];
  // [00][10][12]||[10][11][12]
  for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let j = 0; j < M; j++) sum += Number(A[i][j]);
    sumArr.push(sum);
  }

  return sumArr;
}
console.log("sum=",rowSum([[1,2,3,4],[5,6,7,8],[9,2,3,4]])); //==>
