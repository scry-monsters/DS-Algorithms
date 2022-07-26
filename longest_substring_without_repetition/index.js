/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let max = 0;
let pointer_a = 0;
let pointer_b = 0;
let set = new Set();
while(pointer_b < s.length){
   if(!set.has(s.charAt(pointer_b))){
       set.add(s.charAt(pointer_b));
       pointer_b++;
       max = Math.max(set.size, max);
   }
   else{
       set.delete(s.charAt(pointer_a));
       pointer_a++;
   }
}  
return max;
}
//https://www.youtube.com/watch?v=3IETreEybaA&ab_channel=NickWhite - Nick White's YouTube channel
//First time using the sliding window principle to solve a problem.