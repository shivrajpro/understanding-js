// https://www.scaler.com/academy/mentee-dashboard/class/59857/homework/problems/11455?navref=cl_tt_lst_sl

/**
 *    0 1 2 3
 *  0[1,2,3,4]
    1[5,6,7,0]
    2[9,2,0,4]

    here a[1][3] and a[2][2] are 0
    so make those row and column to 0
    which contain the above cells
    OUTPUT:
    [1,2,0,0]
    [0,0,0,0]
    [0,0,0,0]
    
    
    Approach:
    get row,col pairs in an array
    here [1,3] and [2,2]
    take 1,3
    const row = pair[i][0]
    now make all the elements in row i to 0, here row=1
    let col = 0;
    while(col<m){
        a[row][col++] = 0
    }

    const col = pair[i][1]
    similarly for making column to 0
    let row = 0;
    while(row<n){
        a[row++][col] = 0;
    }
 */
function make0(A) {
  const n = A.length;
  const m = A[0].length;

  const pairs = [];//create a pairs array which will store all the qualified pairs
  let index = 0;
  for (let i = 0; i < n; i++) {
    const arr = []; //will contain pair of row,col
    let found0 = false;

    for (let j = 0; j < m; j++) {
      if (A[i][j] === 0) {
        arr.push([i, j]);
        found0 = true;
      }

      if (found0) pairs[index++] = arr;
      found0 = false; //to avoid adding same pair multiple times
    }
  }

  //iterate through pairs array and make the respective row and column
//   elements to 0
//   console.log("pairs", pairs);
// now make all the elements in a qualified row to 0
  for (let i = 0; i < pairs.length; i++) {
    const row = pairs[i][0][0];
    let col = 0;
    while (col < m) A[row][col++] = 0;
  }

//   now make all the elements in a qualified col to 0
  for (let i = 0; i < pairs.length; i++) {
    const col = pairs[i][0][1];
    let row = 0;
    while (row < n) A[row++][col] = 0;
  }

  return A;
}

console.log(
  make0([
    [1, 2, 3, 4],
    [5, 6, 7, 0],
    [9, 2, 0, 4],
  ])
);
