class Solution(object):
    def twoSum(nums, target):
        for i in range(0, len(nums)):
            for j in range(i+1, len(nums)):
                holder = nums[i] + nums[j]
                if holder == target:
                    return [i, j]

    print(twoSum([2, 7, 4, 5, 6], 9))
