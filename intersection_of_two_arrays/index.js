/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    let freeArr = [];
    let n1 = new Set(nums1);
    let n2 = new Set(nums2);
	console.log(n1, n2)
    for(let i of n1){
        if(n2.has(i)){
            freeArr.push(i);
        }
    }
    return freeArr;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
