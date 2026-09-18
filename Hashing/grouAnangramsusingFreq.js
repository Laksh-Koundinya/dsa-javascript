/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = new Map();

    for (let i = 0; i < strs.length; i++) {
        let array = new Array(26).fill(0);

        for (let j = 0; j < strs[i].length; j++) {
            //  console.log(strs[i][j])
            let index = strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0);
            array[index]++
        }
        let key = array.join('#')
        if (map.has(key)) {
            map.get(key).push(strs[i])
        } else {
            map.set(key, [strs[i]])
        }
    }
    return ([...map.values()])

};