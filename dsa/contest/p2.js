// complicated numbers

function getComplicatedNumbers(A) {
  let arr = [];
  let sortedArr = JSON.parse(JSON.stringify(A)).sort()
  let max2 = sortedArr.sort((a, b) => b - a)[1];
//   console.log(sortedArr);
  for (let i = 0; i < A.length; i++) if (A[i] < max2) arr.push(A[i]);

  return arr;
}

console.log(getComplicatedNumbers([6, 6, 6, 3]));
console.log(getComplicatedNumbers([2, 3, 1, 4, 3]));
