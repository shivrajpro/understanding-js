// https://www.scaler.com/academy/mentee-dashboard/class/59881/assignment/problems/4256/?navref=cl_pb_nv_tb

/**
Input 1:
    A = "111000"
Output 1:
    3

Input 2:
    A = "111011101"
Output 2:
    7 
*/
function getLen(A) {
  /**
   * Approach
   * for every 0
   * count 1s on the left of it and count 1s on its right
   * keep track of this length
   * calculate the max length
   */
  A = A.split("");
  let len = 0;
  let max = 0;
  let totalCount = 0;

  for (let i = 0; i < A.length; i++) if (A[i] == 1) totalCount++;

  if(totalCount == A.length) return totalCount;

  for (let i = 0; i < A.length; i++) {
    if (A[i] == 0) {
      let left = 0,
        right = 0;
      let leftInd = i - 1,
        rightInd = i + 1;

      while (leftInd >= 0) {
        if (A[leftInd--] == 1) left++;
        else break;
      }

      while (rightInd < A.length) {
        if (A[rightInd++] == 1) right++;
        else break;
      }

      //   console.log("L=", left, "R=", right);
      let count = 0;
      if (left + right < totalCount) count = left + right + 1;
      else count = left + right;

      max = Math.max(max, count);
    }
  }

  //   console.log("ans=", max);

  return max;
}

// console.log(getLen("111000"));
// console.log(getLen("1111111111111"));
// console.log(getLen("111011101"));
// console.log(getLen("11010110000000000"));
