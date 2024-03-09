// https://www.scaler.com/academy/mentee-dashboard/class/59868/assignment/problems/11087?navref=cl_tt_lst_sl

function getCost(A) {
  let cost = 0;
  A = A.sort((a, b) => b - a); //descending order

  for (let i = 0; i < A.length; i++) {
    cost += A[i] * (i + 1);
  }
  return cost;
}

console.log(getCost([2, 1]));
console.log(getCost([5]));
