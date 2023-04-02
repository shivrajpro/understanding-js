// https://www.scaler.com/academy/mentee-dashboard/class/59875/homework/problems/11836/submissions

function hasTargetDiff(a, b) {
  const set = new Set();

  for (let i = 0; i < a.length; i++) {
    const diff1 = a[i] - b;
    const diff2 = a[i] + b;
    // console.log('k',k,'set',set);
    if (set.has(diff1) || set.has(diff2)) return 1;
    set.add(a[i]);
  }
  return 0;
}

console.log(hasTargetDiff([5, 10, 3, 2, 50, 80], 78));//1
console.log(hasTargetDiff([-10, 20], 30));//1
