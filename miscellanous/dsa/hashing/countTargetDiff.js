// https://www.scaler.com/academy/mentee-dashboard/class/59875/homework/problems/27741?navref=cl_tt_lst_sl

function getCount(a, b) {
  const hm = {};
  let count = 0;

  for (let i = 0; i < a.length; i++) hm[a[i]] = (hm[a[i]] || 0) + 1;
  for (let i = 0; i < a.length; i++) {
    const diff = a[i] - b;

    // hm[a[i]] = (hm[a[i]] || 0) + 1;
    // console.log("diff", diff, "hm", hm);
    if (hm[diff]) count += hm[diff];
  }

  //   console.log("hm", hm, 'c=',count);
  return count;
}
console.log(getCount([3, 5, 1, 2], 4)); //1
console.log(getCount([1, 2, 1, 2], 1)); //4
