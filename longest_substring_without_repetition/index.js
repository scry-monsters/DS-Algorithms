/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let anchor = 0;
    let slider = 0;
    let max = 0;
    let set = new Set();
    while(slider < s.length){
        if(!set.has(s[slider])){
            set.add(s[slider]);
            slider++;
            max = Math.max(max, set.size);
        }
        else{
            set.delete(s[anchor]);
            anchor++;
        }
    }
    return max;
}
    
//https://www.youtube.com/watch?v=3IETreEybaA&ab_channel=NickWhite - Nick White's YouTube channel
//First time using the sliding window principle to solve a problem.

console.log(lengthOfLongestSubstring("abcabcbb"));
