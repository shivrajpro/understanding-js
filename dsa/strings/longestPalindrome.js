function getLongestPalindrome(A) {
  let maxLength = 1;
  let start = 0;

  // Loop through the string
  for (let i = 0; i < A.length; i++) {
    // Check for even length palindromes
    let left = i;
    let right = i + 1;
    while (left >= 0 && right < A.length && A[left] == A[right]) {
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }

    // Check for odd length palindromes
    left = i - 1;
    right = i + 1;
    while (left >= 0 && right < A.length && A[left] == A[right]) {
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }
  }

  // Return the longest palindromic substring
  return A.slice(start, start + maxLength);
}
