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

function toggleBit(A, B) {
  const mask = 1 << B;
  let updatedA = A ^ mask;
  return updatedA;
  let binary = decimalToBinary(A).split("");
  console.log("b=", binary, "B=", B, "len", binary.length);

  let targetBit = binary[binary.length - B - 1];

  //   if(B >= binary.length) binary.unshift('0');
  let count = B;
  while (binary.length <= B) {
    binary.unshift("0");
    count--;
  }

  console.log("targetBit=", binary[binary.length - B - 1]);
  if (targetBit == 1) binary[binary.length - B - 1] = "0";
  else binary[binary.length - B - 1] = "1";

  console.log("after=", binary);
  console.log("targetBit=", binary[binary.length - B - 1]);

  binary = binary.join("");

  const decimal = binaryToDecimal(+binary);

  //   console.log('d=', decimal);
  return decimal;
}

console.log(toggleBit(4, 1)); //6
console.log(toggleBit(5, 2)); //1
console.log(toggleBit(309, 9)); // 821
console.log(toggleBit(89, 9)); // 601
console.log(toggleBit(637759701, 22)); // 641954005
