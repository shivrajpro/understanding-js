// You are given an integer array A. You have to find the second largest element/value
// in the array or report that no such element exists.
// https://www.scaler.com/academy/mentee-dashboard/class/59879/homework/problems/11427?navref=cl_tt_lst_sl

function get2ndLargest(arr) {
  let max1 = arr[0];
  let max2 = -1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2 && arr[i] != max1) {
      max2 = arr[i];
    }
  }

  return Number(max2);
}

console.log("result=", get2ndLargest([2, 1, 2]));
console.log("result=", get2ndLargest([2]));
console.log("result=", get2ndLargest([13, 7, 16, 18, 14, 17, 18, 8, 10]));
