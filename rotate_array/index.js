

var rotate = function(nums, k) {
    if(nums.length<k) k = k % len // a fallback if rotates(k) is bigger than the given array length
    nums.unshift(...nums.splice(nums.length - k, k))
    return nums
};



console.log(rotate([1,2,3,4,5,6,7], 3))