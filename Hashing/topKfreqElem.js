/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    if (nums.length === 1) return nums;
    const freqElements = new Map();
    for (let num of nums) {
        if (freqElements.has(num)) {
            freqElements.set(num, freqElements.get(num) + 1)
        } else {
            freqElements.set(num, 1);

        }

    }
    let bucket = new Array(nums.length + 1);
    for (let [key, value] of freqElements) {
        if (bucket[value]) {
            bucket[value].push(key)
        } else {
            bucket[value] = [key]
        }
    };
    let ansArr = [];

    for (let i = bucket.length - 1; i >= 0; i--) {


        if (bucket[i]) {

            for (let j = 0; j < bucket[i].length; j++) {

                ansArr.push(bucket[i][j])
                if (ansArr.length == k) {

                    return ansArr
                }
            }
        }
    }

};