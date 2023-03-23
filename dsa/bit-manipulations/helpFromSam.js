function getHelpCount(A) {
  let countAns = 0;
  while (A > 0) {
    if (A % 2 == 1) countAns++; //if score is odd then take help
    A = Math.floor(A / 2);
  }
  return countAns;
}

console.log("ans=", getHelpCount(5)); //2
console.log("ans=", getHelpCount(3)); //2
console.log("ans=", getHelpCount(4)); //1
console.log("ans=", getHelpCount(7)); //3
