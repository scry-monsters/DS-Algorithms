var sortedSquares = function(nums) {
    let startPointer = 0
    let endPointer = nums.length - 1
    let res = []
    
    while (startPointer <= endPointer) {
    console.log(res)

        if(Math.abs(nums[startPointer]) > Math.abs(nums[endPointer])) {
            res.unshift(nums[startPointer] ** 2)
            startPointer++
        } else {
            res.unshift(nums[endPointer] ** 2)
            endPointer--
        }
    }
    return res.sort((a, b) => a - b)
};


console.log(sortedSquares([-7,-3,6,3,11]))
