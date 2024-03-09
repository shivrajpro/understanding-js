// https://www.scaler.com/academy/mentee-dashboard/class/59875/assignment/problems/27742?navref=cl_tt_lst_sl

function getLen(A) {
  //   a subarray with sum zero exists if
  // a number is repeating in pf sum array
  // or if a 0 exists in subarray
  // so find these and accordingly assign the maximum
  //   this approach wont work as 0 can exist multiple times and
  // multiple numbers can repeat
  const pf = [A[0]];

  for (let i = 1; i < A.length; i++) pf[i] = pf[i - 1] + A[i];

  //   console.log(pf);
  let maxLen = 0;

  const tracker = {};
  for (let i = 0; i < pf.length; i++) {
    if (pf[i] == 0) maxLen = Math.max(maxLen, i + 1);
    else if (tracker[pf[i]]) {
      let firstIndex = tracker[pf[i]];
      let currentIndex = i;

      let len = currentIndex - firstIndex;
      maxLen = Math.max(maxLen, len);
    } else tracker[pf[i]] = i;
  }
  return maxLen;
}

console.log(getLen([1, -2, 1, 2])); //3
console.log(getLen([3, 2, -1])); //0
console.log(getLen([9, -20, -11, -8, -4, 2, -12, 14, 1])); //4
