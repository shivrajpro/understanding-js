// https://www.scaler.com/academy/mentee-dashboard/class/75608/homework/problems/66?navref=cl_tt_lst_sl

function addOne(A) {
  let leading9s = 0;
  let leading0s = 0;
  let n = A.length;

  while (leading0s < n && A[leading0s] === 0) {
    leading0s++;
  }
  while (leading9s < n && A[leading9s] === 9) {
    leading9s++;
  }

  // console.log('leading0s',leading0s);
  let cleaned = A.slice(n === 1 ? 0 : leading0s, n);
  // console.log('cleaned',cleaned);
  n = cleaned.length;

  if (leading9s === n) {//if all are 9
    let ans = new Array(n + 1).fill(0);
    ans[0] = 1;
    return ans;
  }
  
  let i = n - 1;
  while (cleaned[i] === 9) {
    cleaned[i] = 0;
    i--;
  }
  cleaned[i] += 1;

  return cleaned;
}

// console.log(addOne([1, 2, 3]));
console.log(addOne([0,0,1]));
// console.log(addOne([9, 9, 9]));
