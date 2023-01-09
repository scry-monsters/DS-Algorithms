/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let start = 0;
    let end = s.length - 1; //4
    while(start <= end){
        let holder = s[start];
        s[start] = s[end];
        s[end] = holder;
        start++;
        end--;
    }
};