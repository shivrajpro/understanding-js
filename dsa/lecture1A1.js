// Problem 4 - You will be given an integer n. 
// You need to return the count of prime numbers less than or equal to n.
// https://www.scaler.com/academy/mentee-dashboard/class/59862/homework/problems/6779?navref=cl_tt_lst_nm
function numOfPrimes(A) {
    let count = 0;
    for (let i = 1; i <=A; i++) 
        if(isPrime(i)) count++;
    return count;
}


console.log("19==>", numOfPrimes(19));
console.log("1==>", numOfPrimes(1));
console.log("===============================");

//Problem 1 -  find the factors of a given number
function getNumberOfFactors(A) {
  let count = 0;
  for (let i = 1; i * i <= A; i++) {
    if (A % i === 0) {
      if (i === A / i) count += 1;
      else count += 2;
    }
  }
  return count;
}
console.log("5=>", getNumberOfFactors(5));
console.log("10=>", getNumberOfFactors(10));
console.log("7=>", getNumberOfFactors(7));
console.log("41=>", getNumberOfFactors(41));
console.log("===============================");

// Problem 2 - Given a number A. Return square root of the number
// if it is perfect square otherwise return -1.
function getSqrt(A) {
  for (let i = 1; i <= A; i++) {
    if (i * i === A) return i;
  }
  return -1;
}
console.log("4==>", getSqrt(4));
console.log("1==>", getSqrt(1));
console.log("5==>", getSqrt(5));
console.log("49==>", getSqrt(49));
console.log("1001==>", getSqrt(1001));
console.log("===============================");

// Problem 3 - Given an Integer A. Return 1 if A is prime and return 0 if not.
// A number is prime of it has only 2 factors. 1 and a number itself
function isPrime(A) {
    let numOfFactors = 0;
    
    for (let i = 1; i * i <= A; i++) {
      if (Number(A % i) === 0) {
        if (i === A / i) numOfFactors += 1;
        else numOfFactors += 2;
      }
    }
    
    return numOfFactors === 2 ? 1 : 0;
}

console.log("64657553==>",isPrime(64657553));
console.log("5==>",isPrime(5));
console.log("64657551==>",isPrime(64657551));