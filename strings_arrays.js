// question 1:https://leetcode.com/problems/reverse-vowels-of-a-string/
// console.log('>> reverseVowels("hello")', reverseVowels("hello"));
// console.log('>> reverseVowels("leetcode")', reverseVowels("leetcode"));
function reverseVowels(inputStr) {
    var result = "", onlyVowels = [];
    console.log('>> inputStr', inputStr);
    // first store all the vowels from input string in a new string;
    // traverse the input string and if you find a vowel replace it with last character
    // from our vowels string. delete this last character from the string
    for (var _i = 0, inputStr_1 = inputStr; _i < inputStr_1.length; _i++) {
        var char = inputStr_1[_i];
        if (isVowel(char))
            onlyVowels.push(char);
    }
    // console.log('>> vowels str',onlyVowels);
    for (var _a = 0, inputStr_2 = inputStr; _a < inputStr_2.length; _a++) {
        var char = inputStr_2[_a];
        result += isVowel(char) ? onlyVowels.pop() : char;
    }
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
// solution 1: (did not work on leetcode)
var moveZeroes = function (nums) {
    var zeroCount = 0;
    nums = nums.filter(function (n) {
        if (n === 0)
            zeroCount++;
        return n !== 0;
    });
    while (zeroCount-- > 0)
        nums.push(0);
    console.log('>> nums', nums);
    // console.log('>> zeroCount', zeroCount);
    // return nums;
};
// moveZeroes([0, 1, 0, 3, 12]);
// moveZeroes([0, 0, 1]);
// solution 2
// count = 0,1;
// [0, 1, 0, 3, 12] --> 
// [1,0,0,3,12] --> 
// [1,3,0,0,12]
//          i
//      j
// simple swaping
function moveZeroes2(nums) {
    var j = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            var temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j++;
        }
    }
    console.log('>> nums', nums);
}
moveZeroes2([0, 1, 0, 3, 12]);
moveZeroes2([0, 0, 1]);
