// print the sum of all sub arrays
function sumAllSubArr(A) {
  let sumArr = [];
  let totalSum = 0;
  for (let s = 0; s < A.length; s++) {
    for (let e = s; e < A.length; e++) {
      const arr = [];
      let sum = 0;
      for (let i = s; i <= e; i++) {
        sum += A[i];
        arr.push(A[i]);
      }
      if (arr.length) {
        // console.log(arr);
        sumArr.push(sum);
        totalSum += sum;
      }
    }
  }
  //   console.log(sumArr);
  return totalSum;
}

console.log(subArrSum([1, 2, 3]));
console.log(subArrSum([2, 1, 3]));
console.log(subArrSum([4, 2, -1, 3]));

function chatGPT(A) {
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    let subarraySum = 0;
    for (let j = i; j < A.length; j++) {
      subarraySum += A[j];
      sum += subarraySum;
    }
  }
  return sum;
}
// sol1([4, 2, -1, 3]);

function subArrSum(A) {
  let totalSum = 0;

  for (let s = 0; s < A.length; s++) {
    let sum = 0;
    for (let e = s; e < A.length; e++) {
      sum += Number(A[e]);
      totalSum += Number(sum);
    }
  }

  return totalSum;
}

// console.log(subArrSum([1,2,3]));
