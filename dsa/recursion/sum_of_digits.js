// https://www.scaler.com/academy/mentee-dashboard/class/59886/homework/problems/10754?navref=cl_tt_lst_sl

function sumOfDigits(n) {
  if (n === 0) return 0;
  return Math.floor(sumOfDigits(n / 10)) + (n % 10);
}

console.log(sumOfDigits(46));
console.log(sumOfDigits(11));
