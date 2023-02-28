function switchPressed(A, fromIndex) {
  for (let i = fromIndex; i < A.length; i++) A[i] = A[i] === 0 ? 1 : 0;
  console.log(A);
  return A;
}
// my solution: throws TLE as its O(N^2)
function turnOnBulbs(A) {
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      A = switchPressed(A, i);
      count++;
    }
  }

  return count;
}

function sol1(A) {
  let count = 0;//1,2,3,4

  for (let i = 0; i < A.length; i++) {
    const num = A[i];
    // if num is 0 then we have to switch it on, hence count++
    // additionally we need to check for that num/bulb if its pressed even number of times
    // if yes then increment the count
    // because pressing the switch of off bulb odd times will leave it off
    if (num === 0 && count % 2 === 0) count++;

    // if num is 1 then we have to check if that bulb's/num is switch is pressed odd times
    // if its pressed odd times then we need to press the same switch again
    // hence in such cases increment count
    // if bulb is on(i.e. num == 1) & count is even then that means bulb has remained in same state
    // we need not press any switch for this bulb 
    if (num === 1 && count % 2 !== 0) count++;
  }
  return count;
}
                            
console.log(sol1([0, 1, 0, 1]));//4
console.log(sol1([1, 1, 1, 1]));//0
console.log(sol1([1, 0, 0, 0, 0]));//1
console.log(sol1([0, 1, 1, 0, 0]));//3
