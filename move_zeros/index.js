var moveZeroes = function(nums) {
    let start = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0 ){
            [nums[i], nums[start]] = [nums[start], nums[i]];
            start++;
        }
    }
    return nums;
};


console.log(moveZeroes([1,2,0,5,0]));