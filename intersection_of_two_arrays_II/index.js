/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    let holder = [];
    let map1 = new Map();
    for(let i of nums1){
        if(map1.has(i)){
            map1.set(i, map1.get(i) + 1);
        }
        else{
            map1.set(i , 1);
        }
    }
    for(let j of nums2){
        if(map1.has(j)){
            holder.push(j)
            map1.set(j, map1.get(j) - 1)
            if(map1.get(j) === 0){
                map1.delete(j)
            }
        }
    }
    return holder;
};


console.log(intersect([4,9,5], [9,4,9,8,4]))