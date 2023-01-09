from collections import Counter


class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        holder = []
        new_nums1 = Counter(nums1)
        for item in nums2:
            if new_nums1[item] > 0:
                holder.append(item)
                new_nums1[item] = 0
        return holder

# helpful videos
# https://www.youtube.com/watch?v=ctOkl71esQg
