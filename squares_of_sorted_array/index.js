var sortedSquares = function (nums) {
	let first = 0;
	let last = nums.length - 1;
	let holder = [];
	while (first <= last) {
		if (Math.abs(nums[first] < Math.abs(nums[last]))) {
			holder.unshift(nums[last] ** 2);
			last--;
		} else {
			holder.unshift(nums[last] ** 2);
			last--;
		}
	}
	return holder.sort((a, b) => a - b);
};

console.log(sortedSquares([-7, -3, 6, 3, 11]));
