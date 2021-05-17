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
// ==========X=================X=============================X===========================
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
// moveZeroes2([0, 1, 0, 3, 12]);
// moveZeroes2([0, 0, 1]);
// ==========X=================X=============================X===========================
// question: balanced paranthesis https://leetcode.com/problems/valid-parentheses/
function hasBalancedParanthesis(str) {
    var myStack = [];
    var myMap = {
        ']': '[',
        ')': '(',
        '}': '{'
    };
    for (var i = 0; i < str.length; i++) {
        var bracket = str[i];
        if ("[({".indexOf(bracket) > -1)
            myStack.push(bracket);
        else if (myMap[bracket] && myMap[bracket] !== myStack.pop())
            return false;
    }
    return myStack.length === 0;
    console.log('>> hasBalancedParanthesis("()")', hasBalancedParanthesis("()"));
    console.log('>> hasBalancedParanthesis("()[]{}")', hasBalancedParanthesis("()[]{}"));
    console.log('>> hasBalancedParanthesis("(]")', hasBalancedParanthesis("(]"));
    console.log('>> hasBalancedParanthesis("([)]")', hasBalancedParanthesis("([)]"));
}
// ===================================================================================
// question: Detect Capital https://leetcode.com/problems/detect-capital/
// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google"
var detectCapitalUse = function (word) {
    if (allLowerCase(word))
        return true;
    if (allCaps(word))
        return true;
    for (var i = 1; i < word.length; i++) {
        // if 1st char is Capital and anyone of the other char is not capital return false
        if (isCapital(word[i]))
            return false;
    }
    if (isCapital(word[0]))
        return true;
    return true;
    console.log('>> allLowerCase("leetcode")', allLowerCase("leetcode"));
    console.log('>> detectCapitalUse("USA")', detectCapitalUse("USA"));
    console.log('>> detectCapitalUse("FlaG")', detectCapitalUse("FlaG"));
    console.log('>> detectCapitalUse("Leetcode")', detectCapitalUse("Leetcode"));
    console.log('>> detectCapitalUse("ffffffffffffffffffffF")', detectCapitalUse("ffffffffffffffffffffF"));
};
function allLowerCase(s) {
    for (var i = 0; i < s.length; i++) {
        var asciiCode = s.charCodeAt(i);
        // console.log(">> asciiCode", asciiCode);
        // console.log(">> fromCharCode", String.fromCharCode(asciiCode));
        if (asciiCode < 97 || asciiCode > 122)
            return false;
    }
    return true;
}
function isCapital(c) {
    return (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 91);
}
function allCaps(s) {
    for (var i = 0; i < s.length; i++) {
        var asciiCode = s.charCodeAt(i);
        // console.log(">> asciiCode", asciiCode);
        // console.log(">> fromCharCode", String.fromCharCode(asciiCode));
        if (asciiCode < 65 || asciiCode > 91)
            return false;
    }
    return true;
}
// ==========X=================X=============================X===========================
// question: https://leetcode.com/problems/length-of-last-word/
var lengthOfLastWord = function (s) {
    var words = s.split(" ");
    var lastWord = words[words.length - 1];
    for (var i = words.length - 1; i >= 0; i--)
        if (words[i].length > 0) {
            lastWord = words[i];
            break;
        }
    console.log('>> lastWord', lastWord);
    return lastWord.length;
    console.log('>> lengthOfLastWord', lengthOfLastWord("Hello World"));
    console.log('>> lengthOfLastWord', lengthOfLastWord(" "));
    console.log('>> lengthOfLastWord', lengthOfLastWord("a "));
    console.log('>> lengthOfLastWord', lengthOfLastWord("Today is a nice day"));
};
