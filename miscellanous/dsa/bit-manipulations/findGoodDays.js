function getGoodDays(A) {
  // another approach here is just to count the number of 1s in binary of A
  // as food doubles everyday. We need to express A in binary and count 1s in it
  // by which we mean cat eats food only on day where the bit is 1

  let countAns = 0;
  while (A > 0) {
    if (A % 2 == 1) countAns++;
    A = Math.floor(A / 2);
  }
  return countAns;
}

console.log("ans=", getGoodDays(5));
console.log("ans=", getGoodDays(8));
