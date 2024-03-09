function getMagicNumber(A) {
  let sum = 0;
  let i = 1;

  while (A > 0) {
    if ((A & 1) === 1) {
      sum += Math.pow(5, i);
    }
    A = A >> 1;
    i++;
  }

  return sum;
}


console.log(getMagicNumber(5));
console.log(getMagicNumber(3));
console.log(getMagicNumber(10));