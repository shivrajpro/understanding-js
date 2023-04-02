// https://www.scaler.com/academy/mentee-dashboard/class/59875/homework/problems/4827?navref=cl_tt_lst_sl

function getCountOfSubarrays(a, b) {
  const pf = [a[0]];

  for (let i = 1; i < a.length; i++) pf[i] = pf[i - 1] + a[i];

//   console.log(pf);
  let count = 0;
//   BELOW LOGIC GIVES TLE
//   for (let l = 0; l < pf.length; l++) {
//     for (let r = l; r < pf.length; r++) {
//       let sum = pf[r];
//       if (l > 0) sum = pf[r] - pf[l - 1];
//       if (sum == b) count++;
//     }
//   }

    const tracker = {};
    for (let i = 0; i < pf.length; i++) {
        const diff = pf[i] - b;

        if(pf[i] == b) count++;
        if(tracker[diff]) count+=tracker[diff];
        tracker[pf[i]] = (tracker[pf[i]] || 0) + 1;
    }
  console.log("count", count);

  return count % (10 ** 9 + 7);
}

console.log(getCountOfSubarrays([1, 0, 1], 1)); //4
console.log(getCountOfSubarrays([0, 0, 0], 0)); //6
console.log(getCountOfSubarrays([-2, 16, -12, 5, 7, -1, 2, 12, 11], 17)); //1
