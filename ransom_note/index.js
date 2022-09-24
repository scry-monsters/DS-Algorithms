/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    let r = new Map();
    let m = new Map();
    for(let i of ransomNote){
        if(r.has(i)){
            r.set(i, r.get(i) + 1);
        }
        else{
            r.set(i, 1);
        }
    }
    for(let i of magazine){
        if(m.has(i)){
            m.set(i, m.get(i) + 1);
        }
        else{
            m.set(i, 1);
        }
    }
    console.log(r, m)
    for(let x of r.keys()){
        if(!m.has(x) || m.get(x) < r.get(x)){
                return false;
            }
    }
    return true;
};