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

function sol1(A) {
  const n = A.length;
  const sumArr = [];
  for (let s = 0; s < A.length; s++) {
    let sum = 0;
    for (let e = s; e < A.length; e++) {
      sum += A[e];
    }
    sumArr.push(sum);
  }
  console.log("SUM=", sumArr);
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

  //   let total = 0;
  //   for (let i = 0; i < A.length; i++) {
  //     total += (i + 1) * (A.length - 1) * A[i];
  //   }

  //   console.log(total);

  return totalSum;
}

// console.log(subArrSum([1,2,3]));
