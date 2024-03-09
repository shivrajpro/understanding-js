// https://www.scaler.com/academy/mentee-dashboard/class/59872/homework/problems/189?navref=cl_tt_lst_sl
// https://www.scaler.com/academy/mentee-dashboard/class/59872/homework/problems/189/discussion/p/very-easy-js-solution/51860
function addStrings(a, b) {
  return Number(BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
}

// console.log(addStrings("100", "11")); //111
// console.log(addStrings("110", "10")); //1000
// console.log(addStrings("10001100010111000101100010100110001001101010000010011010", "101111000100100100111110010010101110101001100100101001111010011000000110"));

function addBinary(a, b) {
  let diff = Math.abs(a.length - b.length);
  let zeroes = "";
  while (diff-- > 0) zeroes += "0";
  //   console.log(zeroes);
  if (a.length > b.length) b = zeroes + b;
  else a = zeroes + a;

  let carry = 0;
  let ans = "";
  for (let i = a.length - 1; i >= 0; i--) {
    const sum = +a[i] + +b[i] + carry;
    const binSum = sum % 2;
    ans += binSum;
    carry = Math.floor(sum / 2);
    // console.log("ans", ans);
  }
  if (carry) ans += carry;

  //   console.log('ans',ans);
  return ans.split("").reverse().join("");
}

console.log(
  addBinary("1001110001111010101001110", "0111111001010000100001001")
); //1001110001111010101001110
console.log(addBinary("100", "11")); //111
console.log(addBinary("110", "10")); //101
console.log(addBinary("111", "111")); //1110
//  11 1
// 111
// 111
// ----
// 0111

// *****
//111
// 111
// 111
// ----
// 1110
