/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if (s.length < 2) return false
    let map = new Map();
    map.set("(", ")");
    map.set("[", "]");
    map.set("{", "}");
    console.log(map)
    for(let i = 0; i <= s.length; i++){
        if(map.has(s[i]) && map.get(s[i]) === s[i+1]){
           return true;
           }
    }
    return false;
};


console.log(isValid("()"));