const radius = [3, 1, 2, 4];
const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const calculate = function (arr, logic) {
  const result = [];
  for (let i = 0; i < arr.length; i++) result.push(logic(arr[i]));

  return result;
};
console.log('>> area',calculate(radius, area));


Array.prototype.calculate = function (logic) {
    const result = [];
    for (let i = 0; i < this.length; i++) result.push(logic(this[i]));
  
    return result;      
}
console.log('>> area',radius.calculate(area));


