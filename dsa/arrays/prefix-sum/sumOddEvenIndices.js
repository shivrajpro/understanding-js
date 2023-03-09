// https://www.scaler.com/academy/mentee-dashboard/class/59858/assignment/problems/26719?navref=cl_tt_lst_sl

/*
Input 1:
A = [1, 2, 3, 4, 5]
B = [   [0,2] 
        [1,4]   ]

Output 1:
[4, 8]
The subarray for the first query is [1, 2, 3] whose sum of even indices is 4.
The subarray for the second query is [2, 3, 4, 5] whose sum of even indices is 8.
*/

//Directi interview question
function getEvenSum(A, B) {
  const n = B.length;
  const pfSum = [A[0]];

  for (let i = 1; i < A.length; i++) {
    if (i % 2 == 0) pfSum[i] = Number(pfSum[i - 1]) + Number(A[i]);
    else pfSum[i] = pfSum[i - 1];
  }
  const result = [];
  for (let i = 0; i < n; i++) {
    const s = B[i][0];
    const e = B[i][1];
    let sum = s == 0 ? pfSum[e] : Number(pfSum[e]) - Number(pfSum[s - 1]);

    // for (let k = s; k <= e; k++) if (k % 2 == 0) sum += A[k];
    result.push(sum);
  }

  return result;
}
/*
console.log(
  getEvenSum(
    [1, 2, 3, 4, 5],
    [
      [0, 2],
      [1, 4],
    ]
  )
);
console.log(
  getEvenSum(
    [2, 1, 8, 3, 9],
    [
      [0, 3],
      [2, 4],
    ]
  )
);
*/

function getOddSum(A, B) {
  const n = B.length;
  const pfSum = [0];

  for (let i = 1; i < A.length; i++) {
    if (i % 2 !== 0) pfSum[i] = Number(pfSum[i - 1]) + Number(A[i]);
    else pfSum[i] = pfSum[i - 1];
  }
  const result = [];
  for (let i = 0; i < n; i++) {
    const s = B[i][0];
    const e = B[i][1];
    let sum = s == 0 ? pfSum[e] : Number(pfSum[e]) - Number(pfSum[s - 1]);

    // for (let k = s; k <= e; k++) if (k % 2 == 0) sum += A[k];
    result.push(sum);
  }

  return result;
}

console.log(getOddSum([ 13, 11, 15, 7, 15, 2 ],[[0,2]]));
