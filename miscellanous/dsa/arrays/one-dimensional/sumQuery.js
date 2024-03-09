// https://www.scaler.com/academy/mentee-dashboard/class/75608/assignment/problems/440?navref=cl_tt_lst_sl

function getSum(a, b) {
  const arr = [];

  for (let i = 0; i < a; i++) arr.push(0);

//   console.log("arr", arr);

  const n = b.length;

  for (let i = 0; i < n; i++) {
    const L = b[i][0] - 1;
    const R = b[i][1] - 1;
    const val = b[i][2];

    for (let j = L; j <= R; j++) arr[j] += val;
    // console.log("arr", arr);
  }

  return arr;
}

console.log(
  getSum(5, [
    [1, 2, 10],
    [2, 3, 20],
    [2, 5, 25],
  ])
);
