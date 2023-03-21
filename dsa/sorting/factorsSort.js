// https://www.scaler.com/academy/mentee-dashboard/class/59868/assignment/problems/27473?navref=cl_tt_lst_sl

function getNumOfFactors(A) {
  let count = 0;
  for (let i = 1; i * i <= A; i++) {
    if (Number(A) % Number(i) == 0) {
      if (i === Number(A) / i) count += 1;
      else count += 2;
    }
  }
  return count;
}

// console.log(getNumOfFactors(48));

function facorsSort(A) {
  A = A.sort((a, b) => {
    let countA = getNumOfFactors(a);
    let countB = getNumOfFactors(b);

    if (countA === countB) return Number(a) - Number(b);
    return countA - countB;
  });

  return A;
}

console.log(facorsSort([6, 8, 9]));
console.log(facorsSort([2, 4, 7]));
console.log(facorsSort([36, 13, 13, 26, 37, 28, 27, 43, 7]));
