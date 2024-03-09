// https://www.scaler.com/academy/mentee-dashboard/class/59868/homework/problems/32021?navref=cl_tt_lst_sl
/*
Input 1:
A = [15, 11, 7, 19]
A = [2, 24, 22, 19]

Example Output
[7, 19, 15, 11]
[2, 19, 24, 22]
*/
function sort10Digits(A) {
  //   console.log(A);
  A = A.sort((a, b) => {
    let x = Math.floor((a / 10) % 10);
    let y = Math.floor((b / 10) % 10);

    if (x === y) return Number(b) - Number(a);
    return x - y;
  });

  return A;
}

console.log(sort10Digits([15, 11, 7, 19])); //[7, 19, 15, 11]
console.log(sort10Digits([2, 24, 22, 19])); //[2, 19, 24, 22]
console.log(sort10Digits([36, 63, 63, 26, 87, 28, 77, 93, 7])); //
