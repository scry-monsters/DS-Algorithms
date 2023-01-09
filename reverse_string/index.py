class Solution:
    def reverseString(self, s: List[str]) -> None:
        start = 0
        end = len(s) - 1
        while (start <= end):
            holder = s[start]
            s[start] = s[end]
            s[end] = holder
            start += 1
            end -= 1
