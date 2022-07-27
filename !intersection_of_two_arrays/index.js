/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
	let holder = [];
	for (let i = 0; i < nums1.length; i++) {
		for (let j = 0; j < nums2.length; j++) {
			if (nums1[i] === nums2[j]) {
				holder.push(nums1[i]);
			}
		}
	}
	return holder;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
