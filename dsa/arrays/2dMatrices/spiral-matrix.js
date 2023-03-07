// https://www.scaler.com/academy/mentee-dashboard/class/59885/assignment/problems/63?navref=cl_tt_lst_sl
/**
 * Problem Description
Given an integer A, generate a square matrix filled with elements from 1 to A2 in spiral order
Return the generated square matrix. 

Input => 
A = 2
[1,2]
[3,4]

Output
[1,2]
[4,3]

*/

function generateMatrix(A) {
  const mat = [];

  let element = 1;
  for (let i = 0; i < A; i++) {
    let row = [];

    for (let j = 0; j < A; j++) row.push(element++);

    mat.push(row);
  }

  console.log("mat", mat);
  return mat;
}

function getSpiralMat(A) {
  // use the logic of printing boundary elements of mat in clockwise direction
  const mat = generateMatrix(A);
  let n = mat.length;

  let i = 0;
  let j = 0;
  const spiralMatElements = [];

  //as we don't want to touch cell in last row first column, k will start from 1
  // and we push n elements in a row each time

  // code to print matrix in spiral order
  while (n > 1) {
    // first row, left to right
    for (let k = 1; k < n; k++) {
      //   console.log(mat[i][j]);
      spiralMatElements.push(mat[i][j]);
      j++;
    } //incrementing the column index only

    // last column, top to down
    for (let k = 1; k < n; k++) {
      //   console.log(mat[i][j]);
      spiralMatElements.push(mat[i][j]);
      i++;
    } //incrementing the row index only

    // last row, right to left
    for (let k = 1; k < n; k++) {
      //   console.log(mat[i][j]);
      spiralMatElements.push(mat[i][j]);
      j--;
    } //decrementing the column index only

    // first row, bottom to up
    for (let k = 1; k < n; k++) {
      //   console.log(mat[i][j]);
      spiralMatElements.push(mat[i][j]);
      i--;
    } //decrementing the row index only

    i++;
    j++;
    n = n - 2;

    if (n === 1) {
      //   console.log(mat[i][j]);
      spiralMatElements.push(mat[i][j]);
    } //last element
  }

  console.log("spiralMatElements", spiralMatElements);
  const spiralMat = [];
  let count = spiralMatElements.length / A;
  let k = 0;
  while (count-- > 0) {
    const row = spiralMatElements.slice(k, A + k);
    // console.log(row);
    spiralMat.push(row);
    k += A;
  }
  return spiralMat;
}

// console.log("SPIRAL MATRIX \n", getSpiralMat(2));
// [1,2,3]     [1,2,3]
// [4,5,6] ==> [6,9,8]
// [7,8,9]     [7,4,5]

/*
[1, 2, 3, 4, 5]           [1,2,3,4,5]
[6, 7, 8, 9, 10]          [10,15,20,25]
[11, 12, 13, 14, 15] ==>                ==>
[16, 17, 18, 19, 20]
[21, 22, 23, 24, 25]
*/
// console.log("SPIRAL MATRIX", getSpiralMat(3));
// console.log("SPIRAL MATRIX", getSpiralMat(2));
// console.log("SPIRAL MATRIX", getSpiralMat(5));

function generateSpiralMat(A) {
  if (A == 1) return [1];

  let n = A;
  let number = 1;
  let matSpiralElements = [];

  for (let i = 0; i < A * A; i++) matSpiralElements.push(number++);

  const mat = [];
  for (let i = 0; i < A; i++) {
    mat[i] = new Array(A).fill(0);
  }
  // console.log('MATRIX',mat);
  // return;
  let index = 0;

  let i = 0,
    j = 0;
  // code to print matrix in spiral order
  while (n > 1) {
    // first row, left to right
    for (let k = 1; k < n; k++) {
      //   console.log(mat[i][j]);
      mat[i][j] = matSpiralElements[index++];
      j++;
    } //incrementing the column index only

    // last column, top to down
    for (let k = 1; k < n; k++) {
      //   console.log(mat[i][j]);
      mat[i][j] = matSpiralElements[index++];
      i++;
    } //incrementing the row index only

    // last row, right to left
    for (let k = 1; k < n; k++) {
      //   console.log(mat[i][j]);
      mat[i][j] = matSpiralElements[index++];
      j--;
    } //decrementing the column index only

    // first row, bottom to up
    for (let k = 1; k < n; k++) {
      //   console.log(mat[i][j]);
      mat[i][j] = matSpiralElements[index++];
      i--;
    } //decrementing the row index only

    i++;
    j++;
    n = n - 2;

    if (n === 1) {
      //   console.log(mat[i][j]);
      mat[i][j] = matSpiralElements[index++];
    } //last element
  }

  return mat;
}

console.log(generateSpiralMat(3));
console.log(generateSpiralMat(1));
console.log(generateSpiralMat(5));

