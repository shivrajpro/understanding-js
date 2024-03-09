// https://www.scaler.com/academy/mentee-dashboard/class/59857/assignment/problems/293?navref=cl_tt_lst_sl

/**
 * [1,2,3]
 * [4,5,6]
 * [7,8,9]
 */

function antiDiagonals(a) {
  //write a logic to access diagonal elements
  // from left to right (i.e.) 0th row
  const result = [];
  const antiDArr = [];
  for (let col = 0; col < a.length; col++) {
    let i = 0,
      j = col;
    const arr = [];
    while (i < a.length && j >= 0) arr.push(a[i++][j--]);
    antiDArr.push(arr);
  }

  //now put the diagonal elements from starting from (m-1)th col
  for (let row = 1; row < a.length; row++) {
    let i = row,
      j = a.length - 1; //so its 12, 21
    const arr = [];
    while (i < a.length && j >= 0) arr.push(a[i++][j--]);
    antiDArr.push(arr);
  }
//   console.log("antiDArr", antiDArr);
  //   in antiDArr we have got array of arrays which contain diagonal elements
  //   now we need to append 0 to each row
  let c = 0;
  while (c < antiDArr.length) {
    const subarr = antiDArr[c];
    i = subarr.length;
    while (i < a.length) {
      subarr.push(0);
      i++;
    }
    c++;
    result.push(subarr);
    // console.log("subarr", subarr);
  }
  return result;
}

console.log(
  antiDiagonals([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  antiDiagonals([
    [1, 2],
    [3, 4],
  ])
);
