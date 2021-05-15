// question:https://leetcode.com/problems/reverse-vowels-of-a-string/
// console.log('>> reverseVowels("hello")', reverseVowels("hello"));
console.log('>> reverseVowels("leetcode")', reverseVowels("leetcode"));

function reverseVowels(inputStr) {
    let result = "", onlyVowels = [];
    console.log('>> inputStr', inputStr);

    // first store all the vowels from input string in a new string;
    // traverse the input string and if you find a vowel replace it with last character
    // from our vowels string. delete this last character from the string
    for (const char of inputStr)
        if (isVowel(char)) 
            onlyVowels.push(char);
    // console.log('>> vowels str',onlyVowels);

    for (const char of inputStr)
        result += isVowel(char) ? onlyVowels.pop() : char;

    // console.log('>> result', result);

    return result;
}

function isVowel(character) {

    return "aeiou".indexOf(character.toLowerCase()) !== -1;
}
