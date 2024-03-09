// https://www.scaler.com/academy/mentee-dashboard/class/59866/homework/problems/17868?navref=cl_tt_lst_sl

// Given an array B of length A with elements 1 or 0. Find the number of subarrays such that the
// bitwise OR of all the elements present in the subarray is 1.
//  A = 2
// B = [1, 0]
// Output : 2
function sol1(A, B) {
  const n = B.length;
  let count = 0;
  for (let s = 0; s < n; s++) {
    for (let e = s; e < n; e++) {
      let ans = B[s];
      let subarr = "";
      for (let i = s; i <= e; i++) {
        // console.log('i',i);
        subarr += B[i];
        ans = ans | B[i];
      }
      if (ans == 1) count += 1;
      console.log("subarr", subarr);
    }
  }
  return count;
}

//1010 | 0001 = 1011
//1001 | 0001 = 1001
//1001 | 0000 = A
function sol2(A, B) {
  const n = B.length;
  let count = 0;
  for (let s = 0; s < n; s++) {
    let ans = B[s];
    let subarr = "";
    for (let e = s; e < n; e++) {
      subarr += B[e];
      ans = ans | B[e];
      if (ans == 1) {
        count += 1;
      }
    }
    // console.log("subarr", subarr);
  }
  return count;
}

function sol3(A,B) {
    const pfOr = [B[0]];
    for (let i = 1; i < B.length; i++) {
        pfOr[i] = pfOr[i-1] | B[i];
    }
    console.log(pfOr);
}
// console.log(sol3(3, [1, 0, 1])); //5 => [1],[1,0],[0,1],[1],[0,1],[1,0,1]
// console.log(sol3(2, [1, 0])); //2

function sol4(A, B) {
  let total = 0;
  let count = 0;
  for (let i = 0; i < A; i++) {
    if (B[i] == 1) count = i + 1;
    // else count = 0;
    total += count;
  }
  return total;
}
console.log(sol4(3, [1, 0, 1])); //5 => [1],[1,0],[0,1],[1],[0,1],[1,0,1]
console.log(sol4(2, [1, 0])); //2
