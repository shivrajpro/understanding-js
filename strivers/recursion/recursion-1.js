//1. print the name n times
function printNameNtimes(i, n) {
    if (i > n) return;

    console.log('Shivraj');
    printNameNtimes(i + 1, n);
}

const n = prompt("Enter a number less than 10");

printNameNtimes(1, +n);

//2. print the number linearly from 1 to N
function printNumbers1toN(i, n) {
    if (i > n) return;
    console.log(i);
    printNumbers1toN(i + 1, n);
}

printNumbers1toN(1, 5);

//3. print numbers from N to 1
function printNumbersNto1(i) {
    if (i === 0) return;
    console.log(i);
    printNumbersNto1(i - 1);
}

printNumbersNto1(5);

//4. print numbers from 1 to N with backtracking
function printNumbers1toN_2(i) {
    if (i === 0) return;
    printNumbers1toN_2(i - 1);
    console.log(i);
}

printNumbers1toN_2(5);

//5. parameterised recursion
function sum(i, acc) {
    if (i < 1) {
        console.log(acc);
        return;
    }
    sum(i - 1, acc + i);
}

// sum(5, 0);
// sum(3, 0);

//6. functional recursion
function sum2(n) {
    if (n === 0) return 0;
    return n + sum2(n - 1);
}

console.log(sum2(3));
console.log(sum2(5));

//7. factorial
function fact(n) {
    if (n === 0) return 1;
    return n * fact(n - 1);
}
console.log(fact(3));
console.log(fact(5));


