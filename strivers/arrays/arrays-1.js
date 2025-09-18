//1. largest element in an array

function getMax(arr) {
    let max = arr[0], secondLargest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element > max) max = element;
    }

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element < max && element > secondLargest) secondLargest = element;
    }
    return { max1: max, max2: secondLargest };
}

// console.log(getMax([3, 1, 2, 5, 2]));
// console.log(getMax([3, 1, 2, 5, 2, 7, 5, 7]));
// console.log(Math.max(...[5, 3, 2, 7, 9, 1]));
// console.log(Math.max.apply(null, [5, 3, 2, 7, 9, 1]));

//2. Check if an array is sorted
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}
// console.log(isSorted([1, 2, 3, 4, 5]));
// console.log(isSorted([1, 2, 3, 4, 5, 1]));

//3. remove duplicates from sorted array (in place)

function removeDuplicates1(arr) {
    const set = new Set();
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        set.add(element);
    }

    // for (const element of set.values()) {
    //     console.log(element);
    // }
    // set.forEach((v) => {
    //     console.log(v)
    // })
    return set;
}
console.log(removeDuplicates1([1, 1, 2, 2, 2, 3, 3,]));

function removeDuplicates2(arr) { //should return number of unique elements
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] != arr[j]) {
            arr[i + 1] = arr[j];
            i++;
        }
    }
    return i + 1;
}
// console.log(removeDuplicates2([1, 1, 2, 2, 2, 3, 3,]));