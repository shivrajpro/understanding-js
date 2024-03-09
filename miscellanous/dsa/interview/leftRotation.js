// https://www.scaler.com/academy/mentee-dashboard/class/59881/homework/problems/3852?navref=cl_tt_lst_sl
/**
Input 1:
    A = [1, 2, 3, 4, 5]
    B = [2, 3]
Input 2:
    A = [5, 17, 100, 11]
    B = [1]

Output 1:
    [ [3, 4, 5, 1, 2]
     [4, 5, 1, 2, 3] ]
Output 2:
    [ [17, 100, 11, 5] ]
*/
function getRotatedArray(A, B) {
  const C = [];
  let ind = 0;
  for (let i = 0; i < A.length; i++) C[ind++] = A[(i + B) % A.length];
  return C;
}

function rotateMultiple(A, B) {
  const result = [];

  for (let i = 0; i < B.length; i++) {
    const C = B[i];
    result.push(getRotatedArray(A, C));
  }

  return result;
}

console.log(rotateMultiple([1, 2, 3, 4, 5], [2, 3]));
console.log(rotateMultiple([5, 17, 100, 11], [1]));
