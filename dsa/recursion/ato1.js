// https://www.scaler.com/academy/mentee-dashboard/class/59886/assignment/problems/31731?navref=cl_tt_lst_sl

function printA(n) {
  if (n === 1) {
    console.log(n);
    return;
  }
  console.log(n);
  return printA(n - 1);
}

printA(5);
