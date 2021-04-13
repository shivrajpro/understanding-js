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

let result = binarySearch(arr, 17);
console.log("result", result, "key", arr[result]);