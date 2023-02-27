// https://www.scaler.com/academy/mentee-dashboard/class/59883/assignment/problems/11921?navref=cl_tt_lst_sl

// Given an integer array A containing N distinct integers, you have to
// find all the leaders in array A. An element is a leader if it is strictly greater than
// all the elements to its right side.
// NOTE: Ordering in the output doesn't matter.

//  A = [16, 17, 4, 3, 5, 2] => [17, 2, 5]

function getLeaders(A) {
  const leaders = [A[A.length - 1]]; // as last element is always a leader
  let leader = A[A.length - 1];

  for (let i = A.length - 1; i >= 0; i--) {
    const element = A[i];
    if (element > leader) {
      leader = element;
      leaders.push(leader);
    }
  }

  return leaders;
}

console.log(getLeaders([16, 17, 4, 3, 5, 2]));
