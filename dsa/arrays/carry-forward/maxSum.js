//  A = [5, -2, 3 , 1, 2]
//  B = 3
// Remove element 5 from front and element (1, 2) from back so we get 5 + 1 + 2 = 8
function sol1(A, B) {
  let count = 0;
  let i = 0,
    j = A.length - 1;
  let sum = 0;

  sum += Math.max(A[i], A[j]); //
  count++; //
  //once we have added max of 1st and last element, reposition i & j;
  if (A[j] > A[i]) j--;
  else i++;

  while (B !== count) {
    if (A[j] >= A[i]) {
      sum += A[j];
      j--;
    } else {
      sum += A[i];
      i++;
    }
    count++;
  }
  return sum;
}

function sol2(A, B) {
  const N = A.length;
  const prefixSum = [A[0]];
  const suffixSum = [A[N - 1]];

  // Compute prefix sums and suffix sums
  for (let i = 1; i < N; i++) {
    prefixSum[i] = prefixSum[i - 1] + A[i];
    suffixSum[i] = suffixSum[i - 1] + A[N - 1 - i];
  }

  let maxSum = prefixSum[B - 1]; // Remove B elements from the left
  for (let i = 1; i < B; i++) {
    const leftSum = prefixSum[i - 1];
    const rightSum = suffixSum[B - i - 1];
    maxSum = Math.max(maxSum, leftSum + rightSum);
  }

  return maxSum;
}

// given by TA
function getMaxSum(A, B) {
  // this problem should be solved by using prefix sum approach for optimisation
  // calculate the prefix sum array
  // take two pointers, i @ 0 and j @ N-B+1 (i.e. (B-1)th element from last)
  // now start with monitoring prefixSum and suffixSum
  // iterate a loop for B times,
  // for every iteration check if prefixSum is greater or suffixSum
  // suffixSum can be calculated as prefixSum(n-1) + prefixSum(j-1)
  // where j will go on incrementing (towards right as it was positioned to leftmost)
  // assign max of leftSum,rightSum to the answer
  // where i goes from 0 to B-1  and j to end;

  const prefixSum = [A[0]];
  for (let i = 1; i < A.length; i++) prefixSum[i] = prefixSum[i - 1] + A[i];

  const N = A.length; //2
  let j = N - B; //1,2
  let answer = Math.max(
    prefixSum[B - 1], //sum of first B elements
    // the code failed for B === N
    prefixSum[N - 1] - (B === N ? 0 : prefixSum[N - B - 1]) //sum of last B elements
  );

  for (let i 
    = 0; i < B && j < N; i++) {
    const left = prefixSum[i];//1
    const right = prefixSum[N - 1] - prefixSum[j];//3-1,2
    j++;
    answer = Math.max(answer, left + right);
  }

  return answer;
}

console.log(getMaxSum([2, 3, -1, 4, 2, 1], 4)); //9
console.log(getMaxSum([1, 2], 1)); //2
console.log(getMaxSum([1, 2, 4, 7, 3], 3)); //14
console.log(getMaxSum([5, -2, 3, 1, 2], 3)); //8
// 2462
console.log(getMaxSum([ -712, -894, 40, -58, 264, -352, 446, 805, 890, -271, -630, 350, 6, 101, -607, 548, 629, -377, -916, 954, -244, 840, -34, 376, 931, -692, -56, -561, -374, 323, 537, 538, -882, -918, -71, -459, -167, 115, -361, 658, -296, 930, 977, -694, 673, -614, 21, -255, -76, 72, -730, 829, -223, 573, 97, -488, 986, 290, 161, -364, -645, -233 ], 34));
