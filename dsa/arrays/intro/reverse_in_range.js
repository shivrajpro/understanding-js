// Given an array A of N integers. Also given are two integers B and C. 
// Reverse the array A in the given range [B, C]
// https://www.scaler.com/academy/mentee-dashboard/class/59879/assignment/problems/29129
function getReversedArray(A, B, C) {
  let left = B,
    right = C;
  while (1) {
    let temp = A[left];
    A[left] = A[right];
    A[right] = temp;

    left++;
    right--;

    if(left >= right) break;
  }
  return A;
}

console.log(getReversedArray([1,2,3,4], 2, 3));
console.log(getReversedArray([2,5,6], 0, 2));
