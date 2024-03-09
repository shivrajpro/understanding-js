function getTransformedString(a) {
  const strArr = a.split(""); //step 1
  const VOWELS = ["a", "e", "i", "o", "u"];
  let result = "";

  for (let i = 0; i < strArr.length; i++) {
    const char = strArr[i];
    if (char >= "a" && char <= "z") {
      if (VOWELS.includes(char)) result += "#";
      else result += char;
    }
  }
//   console.log("res", result);
  return result + result;
}

console.log(getTransformedString("AbcaZeoB"));
