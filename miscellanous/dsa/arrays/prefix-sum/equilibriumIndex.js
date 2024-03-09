// https://www.scaler.com/academy/mentee-dashboard/class/59874/assignment/problems/12826?navref=cl_tt_lst_sl

function getSpecialIndex(A) {
    const prefixSum = [];
    prefixSum[0] = A[0];

    const N = A.length;
    for (let i = 1; i < N; i++) {
        prefixSum[i] = prefixSum[i-1] + A[i];
    }

    // console.log(prefixSum);
    let specialIndexes = [];
    for (let i = 0; i < N; i++) {
        const left = i === 0 ? 0 : prefixSum[i-1];
        const right = prefixSum[N - 1] - prefixSum[i];
        
        if(left === right) specialIndexes.push(i);
    }
    // console.log(specialIndexes);

    let equilibriumIndex = specialIndexes[0];
    if(!specialIndexes.length) equilibriumIndex = -1;;

    return equilibriumIndex;
}

console.log(getSpecialIndex([-7, 1, 5, 2, -4, 3, 0]));
console.log(getSpecialIndex([1,2,3]));