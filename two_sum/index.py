# first solution

class Solution(object):
    def twoSum(self, nums, target):
        for i in range(0, len(nums)):
            for j in range(i+1, len(nums)):
                holder = nums[i] + nums[j]
                if holder == target:
                    return [i, j]


# better solution

class Solution(object):
    def twoSum(nums, target):
        dictionary = {}
        for index, elem in enumerate(nums):
            if target - elem in dictionary:
                return dictionary[target - elem], index
            dictionary[elem] = index
