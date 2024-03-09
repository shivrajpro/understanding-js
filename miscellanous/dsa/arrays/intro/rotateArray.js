// Given an integer array A of size N and an integer B, you have to return the same array
// after rotating it B times towards the right.
// https://www.scaler.com/academy/mentee-dashboard/class/59879/assignment/problems/29098

function rotateArray(A, B) {
  // Check if array A is empty or B is 0
  if (A.length === 0 || B === 0) {
    return A;
  }

  // Calculate the actual rotation times required
  const rotations = B % A.length;

  // Slice the array and join it with the rotated part
  return A.slice(-rotations).concat(A.slice(0, -rotations));
}

console.log(rotateArray([1, 2, 3, 4], 2));
console.log(rotateArray([2,5,6], 1));