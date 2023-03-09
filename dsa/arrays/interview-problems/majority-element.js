// https://www.scaler.com/academy/mentee-dashboard/class/59858/assignment/problems/2?navref=cl_tt_lst_sl

function getME(A) {
    if(A.length == 1) return A[0];

    let ME = A[0];
    let count = 1;

    for (let i = 1; i < A.length; i++) {
        if (A[i] == ME) count++
        else count--;
        if(count == 0) {
            ME = A[i];
            count = 1;
        }
    }

    return ME;
}

console.log(getME([2,1,2]));