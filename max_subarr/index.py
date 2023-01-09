class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        maxNumber = nums[0]
        currentCount = nums[0]
        for i in range(1, len(nums)):
            currentCount = max(nums[i], currentCount + nums[i])
            maxNumber = max(maxNumber, currentCount)
        return maxNumber
# the explanation is in my index.js(same folder)
