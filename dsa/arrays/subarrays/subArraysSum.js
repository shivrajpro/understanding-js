function subarraySum(A) {
    let totalSum = 0;
    const N = A.length;
    for (let i = 0; i < N; i++) 
        totalSum += Number((i+1)*(N-i)*A[i]);
    return totalSum;
}

console.log(subarraySum([1,2,3]))