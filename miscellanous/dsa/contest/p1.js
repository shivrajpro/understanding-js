function sol1(A, B) {
  let str = "";
  while (A > 0) {
    str += "1";
    A--;
  }
  while (B > 0) {
    str += "0";
    B--;
  }

  console.log('str=',str);
  let decimal = parseInt(str,2);

  return decimal;
}

console.log(sol1(19,0));
function binaryToDecimal(A) {
  const B = 2;
  let decimal = 0;
  let position = 0;

  while (A > 0) {
    let digit = A % 10;
    decimal += digit * Math.pow(B, position);
    position++;
    A = Math.floor(Number(A) / 10);
  }

  return decimal;
}
