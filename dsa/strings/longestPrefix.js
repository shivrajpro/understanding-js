// https://www.scaler.com/academy/mentee-dashboard/class/59872/homework/problems/176?navref=cl_tt_lst_sl

function getLongestPref(A) {
  A = A.sort((a, b) => a.length - b.length);
  const len = A[0].length;
  let index = 0;

  let pref = "";
  let str = "";

//   console.log(A);
  //   take 1st char of 1st string  'a'
  // now check if every string starts with 'a' till end of array
  // if any string does not start with  'a' then break;
  // if loop went till end then add that char to result
  // now 2nd char of 1st string 'b';
  while (index < len) {
    const c = A[0][index];
    let matchFound = true;
    for (let i = 0; i < A.length; i++) {
      if (A[i][index] !== c) {
        matchFound = false;
        break;
      }
    }

    if (matchFound) str += c;
    index++;
  }

//   console.log(str);
  return str;
}

console.log(getLongestPref(["abab", "ab", "abcd"]));
console.log(getLongestPref(["abab"]));
console.log(getLongestPref(["abcdefgh", "aefghijk", "abcefgh"]));
