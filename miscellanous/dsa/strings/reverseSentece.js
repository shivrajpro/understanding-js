function getReverseSentence(A) {
    const words = A.trim().split(' ');
    const reversedSentence = words.reverse().join(' ');

    return reversedSentence;
}

console.log(getReverseSentence(" the sky  is  blue   "));