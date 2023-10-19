const fruits = ["apple", "banana", "orange"];
const newFruits = Array.from(fruits);
const fruits2 = newFruits;

newFruits.push("pears");
console.log('fruits',fruits);
console.log('newFruits',newFruits);
console.log('fruits2',fruits2);