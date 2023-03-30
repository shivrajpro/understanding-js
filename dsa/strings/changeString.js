// https://www.scaler.com/academy/mentee-dashboard/class/59872/homework/problems/9114?navref=cl_tt_lst_sl

function getCount(A, B) {
  // maintain the frequency of all characters in an int array
  // "abcabbccd"
  // freq  [2,3,3,1,0,0,0,0]
  // sorted[0,0,0,0,1,2,3,3]
  // filteredArr [1,2,3,3]
  // go on decrementing B with numbers from sorted array
  // if B == 0 break and return the count

  if (B === 0) return A.length;
  if (B === 1 && A.length === 1) return 1;

  const arr = A.split("");
  const freq = new Array(26).fill(0);
  // console.log(freq);

  for (let i = 0; i < arr.length; i++) {
    const index = A.charCodeAt(i) - 97;
    freq[index]++;
  }

  let filteredSortedArr = freq.filter((f) => f > 0).sort();
  //   console.log(filteredSortedArr);
  let count = 0;
  for (let i = 0; i < filteredSortedArr.length; i++) {
    const diff = B - filteredSortedArr[i];
    // console.log('B=',B,'diff',diff);
    B -= filteredSortedArr[i];
    // if (B <= 0) break;
    count++;
    filteredSortedArr[i] = diff;
    // filteredSortedArr[i] = diff;
  }
  console.log(filteredSortedArr);

  filteredSortedArr = filteredSortedArr.filter((n) => n <= 0);
  console.log(filteredSortedArr);
  //   return filteredSortedArr.length;
}

console.log(getMinCharCount("abcabbccd", 3)); //2
console.log(getMinCharCount("hq", 0)); //2
console.log(getMinCharCount("h", 1)); //1
console.log(getMinCharCount("umeaylnlfd", 1)); //8
console.log(
  getMinCharCount(
    "qghumeaylnlfdxfircvscxggbwkfnqduxwfnfozvsrtkjprepggxrpnrvystmwcysyycqpevikeffmznimkkasvwsrenzkycxfxtlsgypsfadpooefxzbcoejuvpvaboygpoeylfpbnpljvrvipyamyehwqnqrqpmxujjloovaowuxwhmsncbxcoksfzkvatxdknlyjyhfixjswnkkufnuxxzrzbmnmgqooketlyhnkoaugzqrcddiuteiojwayyzpvscmpsajlfvgubfaaovlzylntrkdcpwsrtesjwhdizcobzcnfwlqijtvdwvxhrcbldvgylwgbusbmborxtlhcsmpxohgmgnkeufdxotogbgxpeyanfetcukepzshkljugggekjdqzjenpevqgxiepjsrdzjazujllchhbfqmkimwzobiwybxduunfsksrsrtekmq",
    119
  )
); //18
console.log(
  getMinCharCount(
    "zjeeuhmsrqcozijipfioneeddpszrnavymmtatbdzqsoemuvnpppsuacbazuxmhecthlegrpunkdmbppweqtgjoparmowzdqyoxytjbbhawdydcprjbxphoohpkwqyuhrqzhnbnfuvqnqqlrzjpxiogvliexdzuzosrkrusvojbrzmwzpowkjilefraamdigpnpuuhgxpqnjwjmwaxxmnsnhhlqqrzudltfzotcjtnzxuglsdsmzcnockvfajfrmxothowkbjzwucwljfrimpmyhchzriwkbarxbgfcbceyhjugixwtbvtrehbbcpxifbxvfbcgkcfqckcotzgkubmjrmbsztsshfroefwsjrxjhguzyupzwweiqurpixiqflduuveoowqcudhnefnjhaimuczfskuiduburiswtbrecuykabfcvkdzeztoidukuhj",
    19
  )
); //24

function getMinCharCount(A, B) {
  if (B === 0) return A.length;
  if (A.length === 1) return 1;

  let freq = new Array(26).fill(0);
  for (let i = 0; i < A.length; i++) {
    const index = A.charCodeAt(i) - 97;
    freq[index]++;
  }

  freq.sort((a, b) => a - b);

  for (let i = 0; i < freq.length; i++) {
    if (freq[i] !== 0) {
      B = B - freq[i];
      if (B >= 0) freq[i] = 0;
    }

    if (B === 0) break;
  }

  freq = freq.filter(n=>n>0);
  return freq.length;
}
