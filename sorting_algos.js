// BUBBLE SORT
{
    let arr = [2, 4, 3, 6, 7, 5, -1, 9, 8];
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
}
// throw new Error("end bubble sort");
// ==========================================================================================
// SELECTION SORT
// the idea is to bring the smaller numbers at the beginnig at every iteration
// start with 0 to n, 1 to n, and so on
{
    console.clear();
    let arr = [2, 4, 3, 6, 7, 5, -1, 9, 8];
    arr = [8, 1, 2, 3, 4, 5, 6, 7];
    selectionSort(arr);

    function selectionSort(arr) {
        for (let i = 0; i < arr.length; i++) {
            let lowest = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[lowest])
                    lowest = j; //find the index of min. element from j to n
            }

            if (i !== lowest) {
                console.log(arr);
                console.log("SWAPPING TO:");

                let temp = arr[i];
                arr[i] = arr[lowest];
                arr[lowest] = temp;

                console.log(arr);
                console.log("*************");
            }
        }
    }
}

// ==========================================================================================
// INSERTION SORT
// assume left part of the array is sorted
// pick one element at a time and insert in its correct position
{
    console.clear();
    //            i
    let arr = [2, 1, 9, 76, 4];
    // j  v
    // arr = [1,2,3,4,5,6,7];
    // arr.reverse();
    insertionSort(arr);

    function insertionSort(arr) {
        for (let i = 1; i < arr.length; i++) {
            let currentVal = arr[i]; //the element whose position we are going to find

            for (var j = i - 1; j >= 0 && currentVal < arr[j]; j--) {
                console.log(i, j, arr);
                arr[j + 1] = arr[j];
            }

            console.log("PASS Complete!");
            arr[j + 1] = currentVal;
            console.log(i, j, arr);
        }
    }

    console.log(arr);
}
// ==========================================================================================

// MERGE SORT
{
    console.clear();

    let arr = [2, 1, 9, 76, 4];

    console.log(mergeSort(arr));

    function mergeSort(arr) {
        if (arr.length <= 1) return arr;

        let mid = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));

        return merge(left, right);
    }

    function merge(a, b) {
        let c = [], left = 0, right = 0;

        while (left < a.length && right < b.length) {
            if (a[left] < b[right])
                c.push(a[left++]);
            else
                c.push(b[right++]);
        }

        while (left < a.length)
            c.push(a[left++]);

        while (right < b.length)
            c.push(b[right++]);

        return c;
    }

    // console.log(merge([1, 2, 9], [4, 76]));
}
// ==========================================================================================