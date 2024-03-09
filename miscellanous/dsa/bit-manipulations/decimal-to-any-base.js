function decimalToBase(A, B) {
  let result = "";
  while (A > 0) {
    let remainder = A % B;
    A = Math.floor(A / B);
    result = remainder.toString() + result;
  }
  return +result;
}

console.log(decimalToBase(4,3));
console.log(decimalToBase(4,3) & decimalToBase(4,3));
console.log(decimalToBase(4,3) | decimalToBase(4,3));
console.log(decimalToBase(4,3) ^ decimalToBase(4,3));
// console.log(decimalToBase(4,2));
