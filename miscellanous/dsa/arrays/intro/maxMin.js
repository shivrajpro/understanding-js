// find the sum of max and min elements in array

function sumOfMaxMin(A) {
    // return Math.max.apply(null, A) + Math.min.apply(null, A);
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i<A.length; i++){
        const num = A[i];

        if(num > max) max = num;
        if(num < min) min = num;
    }

    return Number(max + min);    
}

console.log("sum=",sumOfMaxMin([-2, 1, -4, 5, 3]));
console.log("sum=",sumOfMaxMin([1, 3, 4, 1]));
console.log("sum=",sumOfMaxMin([ 3, -3, 6, 8, 4, 7, 8, -2, 0 ]));