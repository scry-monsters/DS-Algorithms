/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {

        let holder = s.split("").sort().join();
        let holder2 = t.split("").sort().join();
return holder === holder2;

};


console.log(isAnagram("aacc", "cacc"));