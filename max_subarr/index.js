const maxSubArray = function(nums) {
    if(nums.length == 1) {
        return nums[0];
    }
    let maxSum = nums[0]; // initialize the max sum to the first value in the array
    let currentSum = nums[0]; // initialize the current sum to the first value in the array
    for (let i = 1; i < nums.length; i++) { // iterate through the array starting at the second index
        currentSum = Math.max(nums[i], currentSum + nums[i]); // if the current value is greater than the current sum plus the current value, set the current sum to the current value
        maxSum = Math.max(maxSum, currentSum); // if the current sum is greater than the max sum, set the max sum to the current sum
    }
    return maxSum; // return the max sum
}