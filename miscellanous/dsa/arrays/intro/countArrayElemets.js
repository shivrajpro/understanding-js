// https://www.scaler.com/academy/mentee-dashboard/class/59879/assignment/problems/29033?navref=cl_tt_lst_sl

// Given an array A of N integers. Count the number of elements
// that have at least 1 elements greater than itself.

function getCount(A) {
    let count = 0;
    let qualifiers = new Set();
    for (let i = 0; i < A.length; i++) {
        for (let j = i+1; j < A.length; j++) {
            if(A[i] > A[j]) {
                count++;
                qualifiers.add(A[j])
            }
        }
    }
    // console.log('count=',count)
    // console.log('qualifiers=',qualifiers)
    return qualifiers.size;
}

console.log(getCount([3,1,2]));
console.log(getCount([5,5,3]));
