// https://www.scaler.com/academy/mentee-dashboard/class/59883/homework/problems/14/?navref=cl_pb_nv_tb

// Say you have an array, A, for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction 
// (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
// Return the maximum possible profit.

// Input 1:
// A = [1, 2] ==> 1
// Explanation 1:
// Buy the stock on day 0, and sell it on day 1.

// Input 2:
// Explanation 2:
// Buy the stock on day 0, and sell it on day 2.
// A = [1, 4, 5, 2, 4] ==> 4 (1-5)

function getMaxProfit(A) {
  // this is not as straight forward as I think
  if (A.length === 0) return 0;
  let max = A[0];
  let min = A[0];
  for (let i = 0; i < A.length; i++) {
    if (A[i] > max) max = A[i];
    if (A[i] < min) min = A[i];
  }
  // return max - min;

  // calculate the min price of stock
  // during the same iteration also check
  // if price[i] - minPrice > maxProfit
  // if yes then go on updating the maxProfit

  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] < minPrice) minPrice = A[i];

    if (A[i] - minPrice > maxProfit) maxProfit = A[i] - minPrice;
  }

  return maxProfit;
}

console.log(getMaxProfit([1, 2]));
console.log(getMaxProfit([1, 4, 5, 2, 4]));
console.log(getMaxProfit([2, 1]));
