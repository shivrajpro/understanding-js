// https://www.scaler.com/academy/mentee-dashboard/class/59881/assignment/problems/26771?navref=cl_tt_lst_sl

function decimalToBinary(A) {
  const B = 2;
  let result = "";
  while (A > 0) {
    let remainder = Number(A) % Number(B);
    A = Math.floor(A / B);
    result = remainder.toString() + result;
  }
  return result;
}

function binaryToDecimal(A) {
  const B = 2;
  let decimal = 0;
  let position = 0;

  while (A > 0) {
    let digit = A % 10;
    decimal += digit * Math.pow(B, position);
    position++;
    A = Math.floor(A / 10);
  }

  return decimal;
}

function isPowerOfTwo(number) {
  return (number & (number - 1)) === 0;
}

function getWinner(A) {
  let binary = decimalToBinary(A);
  binary = binary.slice(1) + "1";

  const decimal = binaryToDecimal(+binary);
  return decimal;
}

// console.log(getWinner(4)); //1
// console.log(getWinner(5)); //3
// console.log(getWinner(16)); //1
// console.log(getWinner(9)); //3

function oneLiner(A) {
  // return 2 * (A - Math.pow(2, Math.floor(Math.log2(A)))) + 1;
  const nearestPowerOf2 = Math.floor(Math.log2(A));
  const k = A - Math.pow(2, nearestPowerOf2);
  const ans = 2 * k + 1;
  return ans;
}

console.log(oneLiner(4)); //1
console.log(oneLiner(5)); //3
console.log(oneLiner(16)); //1
console.log(oneLiner(9)); //3
