/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    let set = new Set();
    let pointer_a = 0;
    let pointer_b = 0;
    while(pointer_b < s2.length){
        if(!set.has(s2.charAt(pointer_b))){
            pointer_b++;
        }
        else{
            set.add(s2.charAt(pointer_a));
            pointer_a++;
        }
    }
    }
};

console.log(checkInclusion("ab", "eidbaooo"));

