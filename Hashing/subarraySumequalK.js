/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let totalSubarr = 0;
    let prefixMap = new Map();
    prefixMap.set(0, 1)
    let count = 0
    for (let num of nums) {
        count += num;
        
        let differ = count - k
       
         if (prefixMap.has(differ)) {
            totalSubarr += prefixMap.get(differ);
        }
        prefixMap.set(count, (prefixMap.get(count) || 0) + 1)
    }
    return totalSubarr

};