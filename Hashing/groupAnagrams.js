/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let anagramSet = [];
    let anagramMap = new Map();

    for (let i = 0; i < strs.length; i++) {
        //  console.log(strs[i].split('').sort().join(""))
        let sortedStr = strs[i].split('').sort().join("")
        if (anagramMap.has(sortedStr)) {
            anagramMap.get(sortedStr).push(strs[i]);
        } else {
            anagramMap.set(sortedStr, [strs[i]])
        }
    }
    for (let [key, values] of anagramMap) {
        anagramSet.push(values)
    }
    return anagramSet

};