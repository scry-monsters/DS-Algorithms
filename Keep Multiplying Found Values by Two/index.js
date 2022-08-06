/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
 var findFinalValue = function(nums, original) {
    let orig = original;
    let map  = new Map();
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], i);
    }
    for(let i of map.keys()){
        if(map.has(orig)){
            orig *= 2;
        }
    }
    return orig;
};

console.log(findFinalValue([4, 2], 2));