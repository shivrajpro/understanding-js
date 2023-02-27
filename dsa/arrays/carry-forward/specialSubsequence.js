// https://www.scaler.com/academy/mentee-dashboard/class/59883/assignment/problems/36553?navref=cl_tt_lst_sl
// You have given a string A having Uppercase English letters.
// You have to find the number of pairs (i, j) such that A[i] = 'A', A[j] = 'G' and i < j.

//  A = "ABCGAG" ==> 3
//  A = "GAB" ==> 0

function getCountOfPairs(A) {
  A = A.split("");
  // let count = 0;
  // for (let i = 0; i < A.length; i++) {
  //     if(A[i] === 'A'){
  //         for (let j = i+1; j < A.length; j++) {
  //             if(A[j] === 'G') count++;
  //         }
  //     }
  // }

  let countOfA = 0;
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === "A") countOfA++;
    // add the count of As whenever we find a 'G' to the right of 'A'
    if (A[i] === "G") count += countOfA;
  }
  return count;
}

console.log(getCountOfPairs("ABCGAG"));
console.log(getCountOfPairs("GAB"));
