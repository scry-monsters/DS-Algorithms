/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let map = new Map();
    for(let i = 0; i < s.length; i++){
        let current = s.charCodeAt(i);
        if(!map.has(current)){
            map.set(current, i);
        }
        else{
            map.set(current, -1);
        }
    }
    for(let [key, value] of map){
        if(value === 0){
            return value;
        }
    }
    console.log(map);
    return -1;

};


console.log(firstUniqChar("loveleetcode"));