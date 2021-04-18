// problem sovling patterns
// frequency counters
// multiple pointers
// sliding window
// divide and conquer

// binary search
function binarySearch(arr, key) {
    console.clear();
    let left = 0;
    let right = arr.length - 1;
    // let middle = Math.floor((left + right) / 2);


    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        // console.log(left, right, middle);

        if (arr[middle] === key) return middle;

        if (key > arr[middle]) {
            left = middle + 1;
        } else if (key < arr[middle]) {
            right = middle - 1;
        }


    }

    return -1;
}

let arr = [2, 5, 7, 11, 13, 17, 18, 21, 24, 26];

// let result = binarySearch(arr, 17);
// console.log("result", result, "key", arr[result]);

// STRING MATCHING
let str = "harold said haha in hamburg", key = "ha";
let matches = 0;

// APPROACH 1
for (let i = 0; i < str.length; i++) {

    let tempStr = "", count = key.length, j = i;
    while (count-- > 0 && j < str.length)
        tempStr += str[j++];

    if (tempStr === key) {
        // console.log(tempStr);
        matches++;
    }

}
// console.log(matches);
// APPROACH 2
str = "lorel loled"; key = "lo"; matches = 0;

for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < key.length; j++) {
        console.log(key[j], str[i + j]);
        if (key[j] !== str[i + j]) {
            console.log("BREAK!");
            break;
        }

        if (j == key.length - 1) {
            matches++;
            console.log("MATCH FOUND!");
            break;
        }
    }
}

console.log(matches);