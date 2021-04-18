// BUBBLE SORT
var arr = [2, 4, 3, 6, 7, 5, -1, 9, 8];
arr = [8, 1, 2, 3, 4, 5, 6, 7];
// bubbleSort1(arr);
// bubbleSort2(arr);
bubbleSort3(arr);
console.log(arr);

function bubbleSort1(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1; j++) {
            console.log(arr[j], arr[j + 1], arr);
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        console.log("Pass COMPLETE!");
    }
}

function bubbleSort2(arr) {
    for (var i = 0; i < arr.length; i++) {
        //after every pass last (i + 1) elements are in sorted order
        for (var j = 0; j < arr.length - i - 1; j++) {
            console.log(arr[j], arr[j + 1], arr);
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        console.log("Pass COMPLETE!");
    }
}

// useful when the array is almost sorted
function bubbleSort3(arr) {
    for (var i = 0; i < arr.length; i++) {
        var noSwap = true;
        for (var j = 0; j < arr.length - i - 1; j++) {
            console.log(arr[j], arr[j + 1], arr);
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwap = false;
            }
        }

        console.log("Pass COMPLETE!");
        if (noSwap) break;
    }
}


// ==========================================================================================