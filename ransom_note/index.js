var canConstruct = function(ransomNote, magazine) {
    let ransomMap = new Map();
    let ransomMagazine = new Map();
    for(let i = 0; i < ransomNote.length; i++){
        if(ransomMap.has(ransomNote[i])){
            ransomMap.set(ransomNote[i], ransomMap.get(ransomNote[i]) + 1);
        }
        else{
            ransomMap.set(ransomNote[i], 1);
        }
    }
    for(let i = 0; i < magazine.length; i++){
        if(ransomMagazine.has(magazine[i])){
            ransomMagazine.set(magazine[i], ransomMagazine.get(magazine[i]) + 1);
        }
        else{
            ransomMagazine.set(magazine[i], 1);
        }
    }
    console.log(ransomMap)
    console.log(ransomMagazine)
    for(let i of ransomMap.keys()){
        if(!ransomMagazine.has(i) || ransomMagazine.get(i) < ransomMap.get(i)){
            return false;
        }
    }
    return true;
};


console.log(canConstruct("aa", "aab"));