/**
 * @param {string} s
 * @return {character}
 */
 var repeatedCharacter = function(s) {
    let table = new Map();
    for(let i = 0; i < s.length; i++){
        if(table.has(s[i])){
            return s[i]
        }
        else{
            table.set(s[i], 1);
        }
    }
 };



 console.log(repeatedCharacter("abbcad"));