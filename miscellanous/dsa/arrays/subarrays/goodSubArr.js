// https://www.scaler.com/academy/mentee-dashboard/class/59869/homework/problems/16094?navref=cl_tt_lst_sl

/**
 * Given an array of integers A, a subarray of an array is said to be good 
 * if it fulfills any one of the criteria:
    1. Length of the subarray is be even, and the 
    sum of all the elements of the subarray must be less than B.
    2. Length of the subarray is be odd, and the 
    sum of all the elements of the subarray must be greater than B.
    Your task is to find the count of good subarrays in A.
 */
function sol1(A, B) {
  // approach
  let count = 0;

  for (let s = 0; s < A.length; s++) {
    let sum = 0,
      numOfElements = 0;
    let arr = [];
    for (let e = 0; e < A.length; e++) {
      sum += Number(A[e]);
      arr.push(A[e]);
      numOfElements++;
    }
    console.log("SUBARR", arr);
    if (numOfElements % 2 === 0 && sum < B) {
      count++;
      // console.log('EVEN LENGTH arr',arr);
    }
    if (numOfElements % 2 !== 0 && sum > B) {
      // console.log('ODD LENGTH arr',arr);
      count++;
    }
  }

  return count;
}

function countGoodSubArrays(A, B) {
  let count = 0;
  const n = A.length;
  const pf = [A[0]];
  for (let i = 1; i < n; i++) {
    pf[i] = pf[i - 1] + A[i];
  }
//   console.log("PF SUM", pf);

  for (let l = 0; l < n; l++) {
    for (let r = l; r < n; r++) {
      //pf sum of l to r index is pf(l->r) = pf[r] - pf[n-l-1];
      // number of elements between l to r is r - l + 1
      const numOfElements = r - l + 1;

      let sum = pf[r] - pf[l - 1];
      if(l === 0) sum = pf[r]; 

      if (numOfElements % 2 === 0 && sum < B) {
        count++;
        // console.log("EVEN ==>", "SUM=", sum,"L=",l,"R=",r);
      }
      if (numOfElements % 2 !== 0 && sum > B) {
        count++;
        // console.log("ODD ==>", "SUM=", sum,"L=",l,"R=",r);
      }
    }
  }
  return count;
}

console.log(countGoodSubArrays([1, 2, 3, 4, 5], 4));
console.log(countGoodSubArrays([13, 16, 16, 15, 9, 16, 2, 7, 6, 17, 3, 9], 65));
