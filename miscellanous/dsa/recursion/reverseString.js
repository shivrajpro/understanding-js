// scaler.com/academy/mentee-dashboard/class/59886/homework/problems/10766?navref=cl_tt_lst_sl

function reverseString(s) {
  printStr(s, s.length - 1);
}

function printStr(s, index) {
//   console.log("s", s, index);
  if (index === 0) {
    console.log(s[0]);
    return;
  }
  console.log(s[index]);
  printStr(s, index - 1);
}

reverseString("abc");
