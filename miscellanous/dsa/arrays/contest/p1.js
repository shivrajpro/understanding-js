function s1(A) {
  // two for loops
  // i=0 to n, and j=i to n
  // subArrays, maxLen = 1;
  // index = i;
  // while(a[index]>0){
  // arr.push(a[index++])
  // count++; index++;
  // }
  // if(arr.len>maxLen) {
  // maxLen = arr.len
  // subarr.push(arr)
  // }
  // get max lengths among subarrays
  // count number of arrays with max len

  const n = A.length;
  if (n == 1 && A[0] > 0) return 1;
  if (n == 1 && A[0] < 0) return 0;

  const subArrays = [];
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    let arr = [];
    let index = i;
    while (A[index] >= 0 || index == n - 1) {
      if (A[index] >= 0) arr.push(A[index]);
      index++;
    }

    if (arr.length >= maxLen) {
      maxLen = arr.length;
      subArrays.push(arr);
    }
  }

//   console.log("subarrays", subArrays);

  return maxLen;
}

// console.log(s1([5, 6, -1, 7, 8]));
// console.log(s1([1, 2, 3, 4, 5, 6]));
// console.log(s1([24,22,-20,-3,3,29,-23,20,9]));
// console.log(s1([12, 6, -24]));
console.log(s1([19, 23,0, -26, -20]));
