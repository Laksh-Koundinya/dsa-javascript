/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }

    let firstWord = new Map();
    let secondWord = new Map();
    for (let word of s) {
        if (!firstWord.has(word)) {
            firstWord.set(word, 1)
        } else {

            firstWord.set(word, firstWord.get(word) + 1)
        }
    }
    for (let word of t) {
        if (!firstWord.has(word)) {
            return false
        } else {
            firstWord.set(word, firstWord.get(word) - 1)
        }
    }


    for (const [key, value] of firstWord) {
        if (firstWord.get(key) !== 0){
            return false
        }
    }
    return true

};