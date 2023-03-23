function getCount(A) {
  const B = 2;
  let result = "";
  while (A > 0) {
    let remainder = A % B;
    A = Math.floor(A / B);
    result = remainder.toString() + result;
  }
//   console.log('r=',result);
  let count = 0;
  for (c of result) if (c == "1") count++;

  return count;
}
console.log('c=',getCount(11));
console.log('c=',getCount(6));
console.log('c=',getCount(450676354));