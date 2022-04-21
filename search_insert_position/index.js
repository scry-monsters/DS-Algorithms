var searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target){
            return i; // if found then just give the index
        }
        if(nums[i] >= target){
            return i; //we will find the first number that is bigger than the target and give the position before it, so if you want to find 2 and it doesn't exist in the list, then we have to find the first number that is bigger than the target value(which is 3) and give the position before it so 1 is the answer
        }
    }
    return nums.length //if bigger than the last number, it's safe to assume that it will the place of the last element so nums.length will be the index of the new element introduced to the list 
};


console.log(searchInsert([1,3,4,5], 2))