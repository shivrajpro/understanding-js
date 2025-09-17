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

