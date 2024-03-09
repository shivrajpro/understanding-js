function isAlphaNum(A) {
  for (let i = 0; i < A.length; i++) {
    const c = A[i].toLowerCase();
    if (isNaN(c) && (c < "a" || c > "z")) return 0;
  }

  return 1;
}

console.log(isAlphaNum([ "S", "c", "a", "l", "e", "r", "A", "c", "a", "d", "e", "m", "y", "2", "0", "2", "0" ]));
console.log(isAlphaNum(["S", "c", "a", "l", "e", "r", "#", "2", "0", "2", "0"]));
