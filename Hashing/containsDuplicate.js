/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
let valueSet = new Set(nums);

if(valueSet.size != nums.length){
return true;
}

return false;
};