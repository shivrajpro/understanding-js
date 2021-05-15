// question 1:https://leetcode.com/problems/reverse-vowels-of-a-string/
// console.log('>> reverseVowels("hello")', reverseVowels("hello"));
// console.log('>> reverseVowels("leetcode")', reverseVowels("leetcode"));

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

// ===================================================================================
// question: move zeroes to end (in place) https://leetcode.com/problems/move-zeroes/
// [0,1,0,3,12] --> [1,0,3,12,12] --> [1,0,3,12,0] --> [1,3,12,0,0]
//  i
var moveZeroes = function(nums) {
    let zeroCount = 0;

    nums = nums.filter((n) => {
        if (n === 0) zeroCount++;

        return n !== 0;
    })

    while (zeroCount-- > 0)
        nums.push(0);

    console.log('>> nums', nums);
    // console.log('>> zeroCount', zeroCount);

    // return nums;
};
console.log();
console.log('>> return',moveZeroes([0, 1, 0, 3, 12]));
console.log('>> return',moveZeroes([0, 0, 1]));

