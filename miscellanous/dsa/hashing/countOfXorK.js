// https://www.scaler.com/academy/mentee-dashboard/class/59875/homework/problems/10640?navref=cl_tt_lst_sl

function getCount(a, b) {
  let count = 0;

//   O(n*n)
  for (let i = 0; i < a.length; i++)
    for (let j = 0; j < i; j++) if ((a[i] ^ a[j]) == b) count++;

  return count;
}

console.log(getCount([5, 4, 10, 15, 7, 6], 5));
// console.log(getCount([3, 6, 8, 10, 15, 50], 5));
