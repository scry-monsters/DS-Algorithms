/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
        if(s.length !== t.length) return false;
        let mapS = new Map();
        let mapT = new Map();
        for(let i of s){
            if(mapS.has(i)){
                mapS.set(i, mapS.get(i) + 1);
            }
            else{
                mapS.set(i, 1);
            }
        }
        for(let j of t){
            if(mapT.has(j)){
                mapT.set(j, mapT.get(j) + 1);
            }
            else{
                mapT.set(j, 1);
            }
        }
        for(let x of mapS.keys()){
            if(mapT.get(x) !== mapS.get(x)){
                return false;
            }
        }
        return true;
    };