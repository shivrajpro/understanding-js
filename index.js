//1. https://takeuforward.org/arrays/find-the-missing-number-in-an-array/

function getMissingNumber(arr, n) {
    const summation = (n * (n + 1)) / 2;
    let s2 = 0;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        s2 += element;
    }

    const missingNumber = summation - s2;
    return missingNumber;
}

// console.log(getMissingNumber([1, 2], 3));

//2. https://takeuforward.org/plus/dsa/problems/move-zeros-to-end
// Input: nums = [0, 1, 4, 0, 5, 2]
// Output: [1, 4, 5, 2, 0, 0] //order of array remains same

// my approach, sort the array in descending order. copy the non-zero elements
// in original in the same order and return
// above approach won't work in case of negative numbers and they are less than 0
// will be placed at end after sorting
function moveZeroes1(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element != 0) newArr.push(element);
    }

    let diff = arr.length - newArr.length;
    while (diff != 0) {
        newArr.push(0);
        diff--;
    }
    // console.log(newArr);
    return newArr;
}
// console.log(moveZeroes1([0, 1, 4, 0, 5, 2]));
// console.log(moveZeroes1([0, 0, 0, 1, 3, -2]));
// console.log(moveZeroes1([0, 20, 0, -20, 0, 20]));

function moveZeroes2(arr) {
    // two pointers approach
    let j = -1;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === 0) { j = i; break; }
    }

    if (j === -1) return arr;

    for (let i = j + 1; i < arr.length; i++) {

        if (arr[i] != 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }
    return arr;
}

console.log(moveZeroes2([0, 1, 4, 0, 5, 2]));
console.log(moveZeroes2([0, 0, 0, 1, 3, -2]));
console.log(moveZeroes2([0, 20, 0, -20, 0, 20]));
