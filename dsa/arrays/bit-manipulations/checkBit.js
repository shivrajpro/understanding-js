function getBinary(A) {
  const B = 2;
  let result = "";
  while (A > 0) {
    let remainder = A % B;
    A = Math.floor(A / B);
    result = remainder.toString() + result;
  }
//   console.log('binary=',result);
  return result;
}

function checkBit(A, B) {
    const binary = getBinary(A).split()[0];
    // console.log('binary',binary,'len',binary.length,'B=',B, 'binary.length - B - 1',binary.length - B - 1);
    return +binary[binary.length - B - 1] || 0;
}

console.log(checkBit(4,1)); //0
console.log(checkBit(5,2)); //1
console.log(checkBit(13,2)); //1
console.log(checkBit(309,9)); //0
