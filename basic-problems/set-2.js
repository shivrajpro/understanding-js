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
        }else {
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
        if(arr[i] === 0) zeroCounter++;
        else result.push(arr[i]);
    }

    while(zeroCounter-- > 0) result.push(0);
    console.log('result',result);

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
function detectCapital(str="Flag") {
    // if allcaps-> true, allLowercase->true, first char is Cap->true
    if(allLowerCase(str)) return true;
    if(allCaps(str)) return true;

    if(isCapital(str[0])){
        const subStr = str.substring(1);
        for (const c of subStr) {
            if(isCapital(c)) return false;
        }
        return true;
    }
    return false;
}
const dc = detectCapital;
console.log(dc("Google")); console.log(dc("USA")); console.log(dc("leetcode")); console.log(dc("FlaG"));

function allCaps(str="USA") {
    // if each characters ASCII is in between 65 to 90 (inclusive)
    for (const c of str) {
        if(c.charCodeAt(0) < 65 || c.charCodeAt(0) > 90) return false;
    }
    return true
}
function allLowerCase(str="leetcode") {
    for (const c of str) {
        if(c.charCodeAt(0) < 97 || c.charCodeAt(0) > 122) return false;
    }
    return true;
}
function isCapital(c) {
    return c.charCodeAt(0) >=65 && c.charCodeAt(0) <= 91;
}