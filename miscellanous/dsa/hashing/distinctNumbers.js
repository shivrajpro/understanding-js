// https://www.scaler.com/academy/mentee-dashboard/class/59875/assignment/problems/333?navref=cl_tt_lst_sl

function getDistinctNumbers(A, B) {
  let fMap = new Map();

  // add 1st "0 to Kth elements" frequency map
  for (let i = 0; i < B; i++) {
    if (fMap.has(A[i])) fMap.set(A[i], fMap.get(A[i]) + 1);
    else fMap.set(A[i], 1);
  }

  //Push map size of 1st "0 to Kth elements to array"
  let result = [];

  result.push(fMap.size);

  let start = 1;
  let end = B;
  let n = A.length;

  while (end < n) {
    //outgoing element
    let outgoingEl = fMap.get(A[start - 1]);
    fMap.set(A[start - 1], outgoingEl - 1);
    if (fMap.get(A[start - 1]) === 0) fMap.delete(A[start - 1]);

    //incoming element
    if (fMap.has(A[end])) fMap.set(A[end], fMap.get(A[end]) + 1);
    else fMap.set(A[end], 1);

    //Push map size of  "ith to Kth elements to array"
    result.push(fMap.size);

    //Increment loop values
    start++;
    end++;
  }

  return result;
}

console.log(getDistinctNumbers([1, 2, 1, 3, 4, 3], 3));
console.log(getDistinctNumbers([1, 1, 2, 2], 1));
