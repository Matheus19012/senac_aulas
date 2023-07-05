"use strict";
function factorial(word) {
    let wordSize = word.length;
    if (wordSize === 0 || wordSize === 1) {
        return 1;
    }
    let result = wordSize;
    for (let i = wordSize - 1; i > 1; i--) {
        wordSize *= i;
    }
    return wordSize;
}
console.log(factorial('arena'));
//# sourceMappingURL=index.js.map