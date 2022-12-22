
def removeDuplicates(nums: list[int]) -> int:
    k = 1
    for i in range(1, len(nums)):
        if nums[i-1] != nums[i]:
            nums[k] = nums[i]
            k += 1
            print(nums)
    return k


print(removeDuplicates([1, 2, 2, 3, 4, 4]))
