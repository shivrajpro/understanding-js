// https://www.scaler.com/academy/mentee-dashboard/class/59880/assignment/problems/27344?navref=cl_tt_lst_sl

function binaryToDecimal(binary) {
  let decimal = 0;
  let base = 1;

  while (binary > 0) {
    let digit = binary % 10;
    decimal += digit * base;
    base *= 2;
    binary = Math.floor(binary / 10);
  }

  return decimal;
}

function setBit(A, B) {
  let decimal = Math.pow(2, A) + Math.pow(2, B);
  if (A == B) decimal = Math.pow(2, A);
  return decimal;
}

console.log(setBit(3, 5)); //40
console.log(setBit(4, 4)); //16
console.log(setBit(0, 3)); //9
console.log(setBit(0, 22)); //4194305
