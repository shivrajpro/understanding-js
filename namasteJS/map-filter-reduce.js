const arr = [5, 1, 3, 2, 6];

const sum = arr.reduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);

const maximum = arr.reduce((max, curr) => {
  if (curr > max) max = curr;
  return max;
}, 0);

console.log(">> sum", sum);
console.log(">> max", maximum);

const users = [
  { name: "abc", age: 26 },
  { name: "def", age: 75 },
  { name: "ghi", age: 50 },
  { name: "jkl", age: 26 },
];

let output = users.reduce((acc, curr) => {
  acc[curr.age] = acc[curr.age] ? ++acc[curr.age] : 1;
  return acc;
}, {});

console.log(">> age", output);

output = users
  .filter((u) => {
    return u.age < 30;
  })
  .map((u) => u.name);
console.log(">> filter", output);

output = users.reduce((acc, curr) => {
  if (curr.age < 30) acc.push(curr.name);
  return acc;
}, []);

console.log(">> reduce", output);
