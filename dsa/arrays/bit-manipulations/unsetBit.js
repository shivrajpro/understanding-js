// https://www.scaler.com/academy/mentee-dashboard/class/59880/assignment/problems/26930?navref=cl_tt_lst_sl

// if Bth bit is set then make it unset and return the decimal

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

function decimalToBinary(A) {
  const B = 2;
  let result = "";
  while (A > 0) {
    let remainder = A % B;
    A = Math.floor(A / B);
    result = remainder.toString() + result;
  }
  return result;
}

function unsetBit(A, B) {
  let binary = decimalToBinary(A).split('');
  let targetBit = binary[binary.length - B - 1];
  let result = A;

  if(targetBit == 1) result = A - Math.pow(2,B);

  return result;
}

console.log(unsetBit(4, 1)); //4
console.log(unsetBit(5, 2)); //1
console.log(unsetBit(637759701, 22)); //637759701
