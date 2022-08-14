/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    let step = s1.length;
    let string1 = new Set(s1);
    let string2 = new Set(s2);
    console.log(string1, string2)
    while(step >= 0){
    for(let i = 0; i < string1.length; i++){
        if(string2.has(string1[i]) ){
            return true;
        }
    }
        step--;
    }
  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));

