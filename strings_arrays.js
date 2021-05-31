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
// question 2: move zeroes to end (in place) https://leetcode.com/problems/move-zeroes/
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
// question 3: balanced paranthesis https://leetcode.com/problems/valid-parentheses/
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
// question 4: Detect Capital https://leetcode.com/problems/detect-capital/
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
// question 5: https://leetcode.com/problems/length-of-last-word/
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
// ==========X=================X=============================X===========================
// https://leetcode.com/problems/add-binary/
// question 6: Given two binary strings a and b, return their sum as a binary string
var addBinary = function (a, b) {
    var n1 = parseInt(a, 2);
    var n2 = parseInt(b, 2);
    var sum = n1 + n2;
    console.log('>> addBinary("1010","1")', addBinary("11", "1"));
    console.log('>> addBinary("1010","1011")', addBinary("1010", "1011"));
};
// ==========X=================X=============================X===========================
// https://leetcode.com/problems/add-binary/
// question 7: Given an array of unique integers salary where salary[i] 
// is the salary of the employee i.
// Return the average salary of employees excluding the minimum and maximum salary.
var average = function (salary) {
    var min = Math.min.apply(null, salary);
    var max = Math.max.apply(null, salary);
    var sum = salary.reduce(function (acc, val) { return acc + val; });
    var result = (sum - min - max) / (salary.length - 2);
    console.log('>> min max sum', min, max, sum);
    return result;
    console.log('>> average', average([4000, 3000, 1000, 2000]));
};
// ==========X=================X=============================X===========================
// https://leetcode.com/problems/truncate-sentence/
// question 8: Truncate Sentence
var truncateSentence = function (s, k) {
    s = s.trim();
    return s.split(' ').slice(0, k).join(' ');
    console.log('>> truncateSentence("Hello how are you Contestant", 4)', truncateSentence("Hello how are you Contestant", 4));
};
// ==========X=================X=============================X===========================
// https://leetcode.com/problems/thousand-separator/
// question 9: Thousand Separator
var thousandSeparator = function (n) {
    return n.toLocaleString().replace(/,/g, '.');
    thousandSeparator(12345678);
};
// ==========X=================X=============================X===========================
// https://leetcode.com/problems/sorting-the-sentence/
// question 10: Sorting the Sentence
var sortSentence = function (s) {
    s = "is2 sentence4 This1 a3";
    var arr = s.split(' ');
    var tracker = {};
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        var k = element.slice(element.length - 1);
        var v = element.slice(0, element.length - 1);
        // console.log(k,v);
        tracker[k] = v;
    }
    // console.log(tracker);
    // console.log(Object.values(tracker).join(' '));
    return Object.values(tracker).join(' ');
    console.log('>> ', sortSentence("is2 sentence4 This1 a3"));
};
// ==========X=================X=============================X===========================
// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
// question 11: Check If Two String Arrays are Equivalent
var arrayStringsAreEqual = function (word1, word2) {
    return word1.join('') === word2.join('');
    console.log('>> arrayStringsAreEqual(["ab", "c"], ["a", "bc"])', arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
};
// ==========X=================X=============================X===========================
// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
// question 12: Check if the Sentence Is Pangram
var checkIfPangram = function (sentence) {
    var tracker = {};
    for (var _i = 0, sentence_1 = sentence; _i < sentence_1.length; _i++) {
        var c = sentence_1[_i];
        tracker[c] = tracker[c] ? tracker[c]++ : 1;
    }
    var arr = Object.values(tracker);
    return arr.length === 26 && arr.indexOf(0) === -1;
    console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
    console.log(checkIfPangram("leetcode"));
};
// ==========X=================X=============================X===========================
// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
// question 13: Check if the Sentence Is Pangram
var mergeAlternately = function (word1, word2) {
    var result = '', i = 0;
    var w1 = word1.split(''), w2 = word2.split('');
    while (w1.length > 0 && w2.length > 0) {
        result += i % 2 === 0 ? w1.shift() : w2.shift();
        i++;
    }
    while (w1.length > 0)
        result += w1.shift();
    while (w2.length > 0)
        result += w2.shift();
    // console.log(">> result", result);
    return result;
    console.log('>> mergeAlternately("abc", "pqr")', mergeAlternately("abc", "pqr"));
    console.log('>> mergeAlternately("ab", "pqrs")', mergeAlternately("ab", "pqrs"));
};
// ==========X=================X=============================X===========================
// https://leetcode.com/problems/count-the-number-of-consistent-strings/
// question 14: Count the Number of Consistent Strings
var countConsistentStrings = function (allowed, words) {
    var counter = 0;
    for (var i = 0; i < words.length; i++) {
        var w = words[i];
        var isConsistent = true;
        for (var _i = 0, w_1 = w; _i < w_1.length; _i++) {
            var c = w_1[_i];
            if (allowed.indexOf(c) === -1)
                isConsistent = false;
        }
        if (isConsistent)
            counter++;
    }
    console.log('>> counter', counter);
    return counter;
    countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]); //2
    countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]); //7
    countConsistentStrings("cad", ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]); //4
};
