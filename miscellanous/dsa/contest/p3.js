function getProduct(A) {
  let product = BigInt(1);
  let modulo = BigInt(10e9 + 7);
  if (A.length <= 2) return 0;

  for (let i = 0; i < A.length - 1; i++) {
    //   if(product === 0) prodcut = 1;
    if (A[i] > A[i + 1]) {
      product = BigInt(BigInt(product) * BigInt(A[i]));
      product = product % BigInt(modulo);
    }
  }

  return Number(product);
}

// console.log(getProduct([5]));
// console.log(getProduct([7, 7, 4, 5, 3]));
// console.log(getProduct([35, 20, 19, 34, 39, 40, 3, 33, 12]));
console.log(//3646572697 actual
  getProduct([
    348, 158, 81, 192, 93, 234, 277, 189, 119, 68, 121, 349, 5, 391, 260, 338,
    156, 24, 122, 4, 235, 164, 175, 146, 34, 39, 367, 72, 81, 157, 205, 172,
    304, 284, 158, 224, 392, 225, 122, 251, 274, 323, 278, 232, 238, 332, 72,
    101, 396, 210,
  ])
); //998982812 expected

/**
 public class Solution {
  private static final int MOD = 1000000007;

  public int solve(int[] A) {
    int n = A.length;

    long ans = 0;
    for (int i = 0; i <n - 1; i++) {
      if (A[i] > A[i+1]) {
        if (ans == 0) {
          ans = 1;
        }
        ans *= A[i];
        ans %= MOD;
      }
    }
    return (int) ans;
  }
}
 */
