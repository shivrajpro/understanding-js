// https://www.scaler.com/academy/mentee-dashboard/class/59881/assignment/problems/27363?navref=cl_tt_lst_sl

function getCount(A) {
  let ans = 0;
  console.log(A);
  for (let i = 0; i < A.length; i++) {
    let left = 0,
      right = 0;
    for (let j = i - 1; j >= 0; j--) if (A[j] < A[i]) left++;
    for (let j = i + 1; j < A.length; j++) if (A[j] > A[i]) right++;

    // console.log("A[i]", A[i], "L=", left, "R=", right);
    ans = ans + left * right;
  }

  return ans;
}

// console.log(getCount([1, 2, 4, 3])); //2
// console.log(getCount([2, 1, 2, 3])); //1
console.log(getCount([1, 2, 2, 3])); //2
// console.log(getCount([1, 16, 26, 17, 27, 26, 4])); //10
// console.log(sol1([1, 16, 26, 17, 27, 26, 4]));

function sol1(A) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      for (let k = j + 1; k < A.length; k++) {
        if (A[i] < A[j] && A[j] < A[k]) count++;
      }
    }
  }
  return count;
}

function countTriplets(arr) {
  const n = arr.length;
  let count = 0;

  // Iterate over all possible middle elements
  for (let j = 1; j < n - 1; j++) {
    let leftMax = -Infinity;
    // Iterate over elements on the left of the middle element
    for (let i = 0; i < j; i++) {
      if (arr[i] < arr[j]) {
        // Count the number of elements on the left
        // that are smaller than the middle element
        if (arr[i] > leftMax) {
          leftMax = arr[i];
          count++;
        }
      }
    }

    let rightMax = -Infinity;
    // Iterate over elements on the right of the middle element
    for (let k = j + 1; k < n; k++) {
      if (arr[k] > arr[j]) {
        // Count the number of elements on the right
        // that are greater than the middle element
        if (arr[k] > rightMax) {
          rightMax = arr[k];
          count++;
        }
      }
    }
  }

  return count;
}

// console.log(countTriplets([1, 16, 26, 17, 27, 26, 4]));
// console.log(sol2([1, 16, 26, 17, 27, 26, 4]));

function sol2(A) {
  let count = 0;
  let min = A[0];
  let max = A[0];
  let num_between = 0;

  for (let i = 1; i < A.length; i++) {
    if (A[i] < min) {
      min = A[i];
      max = A[i];
      num_between = 0;
    } else if (A[i] > max) {
      max = A[i];
      count += num_between;
      num_between = 0;
    } else {
      count += num_between;
      num_between++;
    }
  }

  return count;
}
