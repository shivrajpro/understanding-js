// 1. reverse vowels in a string. eg: hello->holle, leetcode-> leotcede
function reverseVowels(str) {
    // form a string of all vowels from str and reverse it. e.g. eo->oe
    // start traversing the str, if a vowel is encountered, replace it with reversedVowels

    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    let vowelsString = [];

    for (const c of str) {
        if (VOWELS.includes(c)) {
            vowelsString.push(c);
        }
    }
    vowelsString = vowelsString.reverse().join('');
    console.log('reversedVowles', vowelsString);

    let result = '', index = 0;
    for (const c of str) {
        if (VOWELS.includes(c)) {
            result += vowelsString[index++];
        } else {
            result += c;
        }
    }
    console.log('result', result);
}
// reverseVowels("hello");reverseVowels("leetcode");

// 2. move zeroes to end. [0,1,0,3,12]->[1,3,12,0,0], [0]->[0]. Revisit
function moveZeroes(arr) {
    // without in place
    const result = [];
    let zeroCounter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) zeroCounter++;
        else result.push(arr[i]);
    }

    while (zeroCounter-- > 0) result.push(0);
    console.log('result', result);

    // in place

    return result;
}
// moveZeroes([0,1,0,3,12]); moveZeroes([0]); 

// 3. balanced parenthesis. "()"-> true, "()[]{}"->true, "(]"->false
function hasBalancedParenthesis(str) {
    const myStack = [];
    const myMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    for (const c of str) {
        if (c === '(' || c === '[' || c === '{') myStack.push(c);
        else if (myMap[c] !== myStack.pop()) return false; // null check
    }
    return true;
}
const hbp = hasBalancedParenthesis;
// console.log(hbp("()")); console.log(hbp("()[]{}")); console.log(hbp("(]"));

// 4. Detect Capital. "USA"->true, "leetcode"->true, "Google"->true, "FlaG"->false
function detectCapital(str = "Flag") {
    // if allcaps-> true, allLowercase->true, first char is Cap->true
    if (allLowerCase(str)) return true;
    if (allCaps(str)) return true;

    if (isCapital(str[0])) {
        const subStr = str.substring(1);
        for (const c of subStr) {
            if (isCapital(c)) return false;
        }
        return true;
    }
    return false;
}
const dc = detectCapital;
// console.log(dc("Google")); console.log(dc("USA")); console.log(dc("leetcode")); console.log(dc("FlaG"));

function allCaps(str = "USA") {
    // if each characters ASCII is in between 65 to 90 (inclusive)
    for (const c of str) {
        if (c.charCodeAt(0) < 65 || c.charCodeAt(0) > 90) return false;
    }
    return true
}
function allLowerCase(str = "leetcode") {
    for (const c of str) {
        if (c.charCodeAt(0) < 97 || c.charCodeAt(0) > 122) return false;
    }
    return true;
}
function isCapital(c) {
    return c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 91;
}


// 5. length of last word. "   fly me   to   the moon  "->4
function getLenOfLastWord(str = "a") {
    const words = str.split(" ").reverse();
    for (const str of words) {
        if (str.length) return str.length;
    }
    console.log(words);
}
const gLLW = getLenOfLastWord;
// console.log(gLLW("Hello World"));
// console.log(gLLW("   fly me   to   the moon  "));
// console.log(gLLW("luffy is still joyboy"));

// 6. add binary strings. "11" + "1" -> "100"
function addBinary(a = "11", b = "1") {
    const aNum = parseInt(a, 2), bNum = parseInt(b, 2);
    const result = aNum + bNum;
    return result.toString(2);
}
const ab = addBinary;
// console.log(ab("11","1")); console.log(ab("1010","1011"));

// 7. sorting the sentence. "is2 sentence4 This1 a3" -> "This is a sentence"
function getSortedSentence(str = "is2 sentence4 This1 a3") {
    // traverse words, get the last character->index
    // map the words to indices in an object
    const myMap = {};
    const words = str.split(" ");
    const result = [];

    for (const word of words) {
        const index = word.charAt(word.length - 1);
        myMap[index] = word.substring(0, word.length - 1);
    }
    for (let i = 0; i < words.length; i++) {
        result.push(myMap[i + 1]);
    }
    // console.log(myMap);
    // console.log(result);
    return Object.values(myMap).join(" ");
    return result.join(" ");
}
const gSS = getSortedSentence;
// console.log(gSS("Myself2 Me1 I4 and3")); console.log(gSS("is2 sentence4 This1 a3"));

// 8. check if sentence is Pangram. 'A quick brown fox jumps over the lazy dog'->true
function isPangram(sentence = "A quick brown fox jumps over the lazy dog") {
    const alphabets = new Set(sentence.split(" ").join("").toLowerCase());
    return alphabets.size === 26;
    //  console.log(alphabets);
}
const ip = isPangram;
// console.log(ip());
// console.log(ip("test")); 

// 9. Count the Number of Consistent Strings
/*
Example 1:
Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

Example 2:
Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.
*/
function getCountOfConsistentStrings(allowed = "ab", words = ["aab", "bd"]) {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (isConsistent(allowed, words[i])) count++;
    }
    // console.log(count);
    return count;
}

function isConsistent(allowed = "ab", word = "bd") {
    for (const c of word) {
        if (allowed.indexOf(c) === -1) return false;
    }
    return true;
}

const ccs = getCountOfConsistentStrings;
console.log(ccs("ab", ["ad","bd","aaab","baa","badab"])); //2
console.log(ccs("abc", ["a","b","c","ab","ac","bc","abc"])); //7