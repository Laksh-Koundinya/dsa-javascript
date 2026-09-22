/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length < 2) {
        return nums.length
    }
    let set = new Set(nums);
    let len = 1;

    for (let num of set) {

        if (!set.has(num - 1)) {

            let i = 1;

            while (set.has(num + 1)) {
                num++;
                i++;
            }

            len = Math.max(len, i);
        }
    }
    return len
};