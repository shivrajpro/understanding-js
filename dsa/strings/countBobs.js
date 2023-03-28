function getCount(a) {
  const A = a;
  a = a.split("");
  let count = 0;

  for (let i = 0; i < a.length; i++) if (A.substr(i, 3) == "bob") count++;

  return count;
}

console.log(getCount("abobc")); //1
console.log(getCount("bobob")); //2
