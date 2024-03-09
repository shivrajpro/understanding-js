
function reverseVowels(A) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelString = "";

  for (let i = 0; i < A.length; i++) {
    const ch = A[i];
    if (vowels.indexOf(ch) > -1) vowelString += ch;
  }

  vowelString = vowelString.split("").reverse().join('');

  let result = [];
  let index = 0;
  let ind = 0;
  for (let i = 0; i < A.length; i++) {
    const ch = A[i];
    if (vowels.indexOf(ch) > -1) result[index++] = vowelString[ind++];
    else result[index++] = ch;
  }
  return result.join('');
}

console.log(reverseVowels("casio"));
console.log(reverseVowels("baidego"));
