function convertToDecimal(A, B) {
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


console.log(convertToDecimal(1010,2));
console.log(convertToDecimal(22,3));