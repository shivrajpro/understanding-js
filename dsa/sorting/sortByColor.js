// https://www.scaler.com/academy/mentee-dashboard/class/59868/homework/problems/167/?navref=cl_pb_nv_tb

// array contains 0s, 1s and 2s only. return sorted array without library sort function

function getSortedArr(A) {
  let zeroes = 0,
    ones = 0,
    twos = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) zeroes++;
    if (A[i] === 1) ones++;
    if (A[i] === 2) twos++;
  }

  let ind = 0;
  while (zeroes >= 0) {
    if (zeroes === 0) break;
    A[ind++] = 0;
    zeroes--;
  }
  while (ones >= 0) {
    if (ones === 0) break;
    A[ind++] = 1;
    ones--;
  }
  while (twos >= 0) {
    if (twos === 0) break;
    A[ind++] = 2;
    twos--;
  }

  return A;
}

console.log(getSortedArr([0, 1, 2, 0, 1, 2]));
