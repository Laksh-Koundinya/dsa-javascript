/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let indexValue = new Map()
    for (let index = 0; index < nums.length; index++) {
    
        let compliment = target - nums[index];
        if (indexValue.has(compliment)) {
            
            return [indexValue.get(compliment), index]
        }
        if (!indexValue.has(nums[index])) {
            indexValue.set(nums[index], index)
        }
      
    }



};