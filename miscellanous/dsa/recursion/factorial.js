// https://www.scaler.com/academy/mentee-dashboard/class/59886/assignment/problems/10753?navref=cl_tt_lst_sl

function fact(n) {
  if (n <= 1) return 1;

  return n * fact(n - 1);
}

console.log(fact(5));
