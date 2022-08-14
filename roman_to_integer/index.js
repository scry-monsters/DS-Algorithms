/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(string) {
    let s = string.split("")
    let map = new Map([["I",1], ["V",5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]]);
    holder = 0;
    for(let i = 0; i < s.length; i++){
        if(map.get(s[i]) < map.get(s[i+1])){
            holder -= map.get(s[i]);
            console.log(holder)
        }
        else{
            holder += map.get(s[i]);
        }
    
    }
    return holder;
};


console.log(romanToInt('IV'))