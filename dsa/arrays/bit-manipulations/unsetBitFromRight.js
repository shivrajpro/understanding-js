// https://www.scaler.com/academy/mentee-dashboard/class/59880/homework/problems/17892?navref=cl_tt_lst_sl

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

function unsetBits(A, B) {
  return A & ~((1 << B) - 1);
  console.log("B=", B);
  let binary = decimalToBinary(A).split("");
  console.log("b=", binary);

  for (let i = binary.length - 1; i >= 0; i--) {
    if (B == 0) break;
    if (binary[i] == 1) binary[i] = "0";
    B--;
  }
  binary = binary.join("");
  console.log("b=", binary);

  const decimal = binaryToDecimal(+binary);

  return decimal;
}

// console.log(unsetBits(25, 3)); //24
// console.log(unsetBits(37, 3)); //32
// console.log(unsetBits(93, 4)); //80
console.log(unsetBits(15, 2)); //12
// console.log(unsetBits(915314, 7)); //915200
