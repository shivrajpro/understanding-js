// https://www.scaler.com/academy/mentee-dashboard/class/59866/homework/problems/17934?navref=cl_tt_lst_sl

function xorSum(A, B) {
  let X = 0;
  let maxVal = A*B;
  let min = 9999

  while (X++ <= maxVal) {
    const val = (A ^ X) + (B ^ X);
    // console.log('x=',X,'val=',val);
    if (val < min) {
        min = val;
        // console.log('min',min);
    }
  }
  return min;
}

// console.log(xorSum(6, 12));
// console.log(xorSum(4, 9));
// console.log(xorSum(1, 2));

function sol1(A,B) {
  let C = A & B;
  return (A^C) + (B^C);
}
console.log(sol1(6, 12));
console.log(sol1(4, 9));
