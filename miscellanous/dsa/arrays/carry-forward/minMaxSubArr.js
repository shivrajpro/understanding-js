// https://www.scaler.com/academy/mentee-dashboard/class/59883/assignment/problems/986?navref=cl_tt_lst_sl

// Given an array A, find the size of the smallest subarray such that it
// contains at least one occurrence of the maximum value of the array
// and at least one occurrence of the minimum value of the array.

// A = [1, 3] ==> 2
// A = [2] ==> 1
const A = "amazon";
let index = A.indexOf('a');

while (index !== -1) {
  const substring = A.substring(index);
  console.log(substring);
  index = A.indexOf('a', index + 1);
}

function getLenOfReqArr(A) {
  let min = A[0],
    max = A[0];

  for (let i = 0; i < A.length; i++) {
    min = A[i] < min ? A[i] : min;
    max = A[i] > max ? A[i] : max;
  }

  if (min === max) return 1;

  let lastMinIndex = -1,
    lastMaxIndex = -1;

  //if array is sorted
  let answer = A.length; //11, 4, 4, 3

  for (let i = 0; i < A.length; i++) {
    if (A[i] === min) {
      lastMinIndex = i; //5, 10
      if (lastMaxIndex !== -1) answer = Math.min(answer, i - lastMaxIndex + 1);
    }
    if (A[i] === max) {
      lastMaxIndex = i; //2,8
      if (lastMinIndex !== -1) answer = Math.min(answer, i - lastMinIndex + 1);
    }
  }
  // console.log('min=',min, 'max=',max);
  return answer;
}

// console.log(getLenOfReqArr([2,1,4,3]));
// console.log(getLenOfReqArr([1,3]));
console.log(getLenOfReqArr([2, 2, 6, 4, 5, 1, 5, 2, 6, 4, 1]));
// console.log(getLenOfReqArr([2]));
