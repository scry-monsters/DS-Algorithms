/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS = function(nums) {
    let result = 0;
    let startWindow = 0;
    for(let i = 0; i < nums.length; i++){
    if(i > 0 && nums[i - 1] >= nums[i]) startWindow = i;
    result = Math.max(result, i - startWindow + 1);
    }
    return result;
};
