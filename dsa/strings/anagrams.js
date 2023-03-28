function isAnagram(str1, str2) {
  let tracker = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];

    if (!tracker[char]) tracker[char] = 1;
    else tracker[char]++;
  }

  console.log(tracker);

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];

    if (!tracker[char]) return false;
    else tracker[char]--;
  }

  console.log(tracker);

  let sum = Object.values(tracker).reduce((acc, val) => {
    return acc + val;
  }, 0);

  console.log(sum);

  return sum == 0;
}

// console.log(isAnagram("secure","rescue"));
console.log(isAnagram("cat","bat"));
